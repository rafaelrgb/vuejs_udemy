<template>
  <div>
    <h2>Quotes Added</h2>
    <div class="progress" style="height: 25px;">
      <div class="progress-bar" :style="progressBarWidth">{{ quotesCount }} / {{ maxQuotes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    quotesCount: Number,
    maxQuotes: Number
  },
  computed: {
    progressBarWidth: function() {
      return {
        width: (this.quotesCount * 100 / this.maxQuotes) + '%'
      }
    }
  }
};
</script>

<style scoped>
</style>
