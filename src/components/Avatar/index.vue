<template>
  <div class="Avatar">
      <img class="Avatar-img" :src="src" :style="{width: size+'px', height: size+'px'}" alt="">
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type: String,
            required: true,
        },
        size:{
            type: Number,
            default: 150,
        }
    }
}
</script>

<style>
.Avatar-img{
    border-radius: 50%;
    object-fit: cover;
}
</style>