<template>
  <div>
    <NuxtLayout name="header">
    <Nuxt-Link to="/">主页</Nuxt-Link>
    <Nuxt-Link to="/user">用户</Nuxt-Link>
    <Nuxt-Link to="/article/123">文章 1</Nuxt-Link>
    <Nuxt-Link to="/article/456"> 文章 2</Nuxt-Link>

   
     
    </NuxtLayout>


    <van-button type="danger">vant按钮</van-button>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  useSeoMeta({
    titleTemplate(title: string | undefined) {
        return title ? `${title} - Nuxt 3 示例` : 'Nuxt 3 示例'
    },
    ogTitle:"Nuxt 3 示例",
    description:"Nuxt 3 示例",
    ogDescription:"Nuxt 3 示例",
    ogImage:"https://example.com/image.jpg"
  })
</script>