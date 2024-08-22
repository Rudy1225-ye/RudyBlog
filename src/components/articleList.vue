<template>
    <div class="Content">
      
      <div class="article" v-for="item in posts.slice(0, 5)" :key="item.id">
        <routerLink :to="item.path" class="article-title">
          {{item.title}}
        </routerLink>
        <p class="article-shortbrief">
          {{ item.desc }}
        </p>
        <div class="tags">
          <p class="create-time">
            {{ item.date }}
          </p>
          <routerLink :to="`/tags/${item.tags}`" class="tag">
            {{ item.tags }}
          </routerLink>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  const files = import.meta.glob('@/pages/article/*.md')
  const loadedPosts = []

  for(const path in files) {
    const module = await files[path]()
    loadedPosts.push({
      ...module.frontmatter,
      path: path.replace('/src/pages/', '').replace('.md', '')
    })
  }

  posts.value = loadedPosts
  console.log(posts.value)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.tags {
  font-size: 16px;
  display: flex;
}
.tags .tag {
  margin-left: auto;
  text-decoration: none;
  color: var(--text-grey);
  display: block;
  margin-left: auto;

}
.tag:hover {
  color: var(--color-primary);
}
.Content {
  width: 50%;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 64px;
}
.content-title {
  font-size: 32px;
  display: flex;
}
.article {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.content-text,.article-title {
  font-size: 20px;
}
.article-title {
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}
.article-title:hover {
  text-decoration: underline;
}
.article-shortbrief {
  font-size: 16px;
  color: var(--color-bg);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
.create-time {
  font-size: 16px;
  color: var(--text-grey);
}
p {
  margin: 0;
  padding: 0;
}
</style>