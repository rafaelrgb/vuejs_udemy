<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3" v-for="(quote, idx) in quotes" :key="idx">
      <div class="card quote mb-3" @click="$emit('quote-clicked', idx)">
        <div class="card-body">{{ quote }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppQuotes",
  props: {
    quotes: Array
  }
};
</script>

<style scoped>
.quote {
  font-size: 24px;
  font-family: Arizonia, cursive;
  cursor: pointer;
}

.quote:hover {
  background-color: #fcdee4;
}
</style>
