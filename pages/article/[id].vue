<template>
    <div>
        {{ $route.params.id }}
        {{ data?.hello }}
    </div>
</template>

<script setup lang="ts">
   console.log(useRoute().params.id);
   const { data } = await useFetch('/api/articleList')
   console.log(data.value)

</script>

<style scoped>

</style>