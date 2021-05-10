<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          v-model="body"
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="handleClick">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{
            name: 'profile',
            params: {
                username: comment.author.username
            }
        }" class="comment-author">
          <img
            :src="comment.author.image"
            class="comment-author-img"
          />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{
            name: 'profile',
            params: {
                username: comment.author.username
            }
        }" class="comment-author">{{ comment.author.username }}</nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import { getComments, postComments } from "@/api/article"

export default {
    name: "ArticleComments",
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            comments: [], // 文章列表
            body: ''
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        async init() {
            const { data } = await getComments(this.article.slug)
            this.comments = data.comments
        },
        async handleClick() {
            const { data } = await postComments(this.article.slug, { comment: {
                body: this.body
            } })
            this.init()
            this.body = ''
        }
    }
}
</script>

<style></style>
