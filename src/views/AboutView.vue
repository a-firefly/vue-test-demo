<script setup lang="ts">
import { onMounted } from 'vue';
import { increment } from '@/tool';


onMounted(()=> {
  console.log("on mounted")
  const result = increment(1, 10)
  console.log("result:", result)
})

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
