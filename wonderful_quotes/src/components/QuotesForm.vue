<template>
  <div>
    <div class="form-group">
      <label for="quote-text-area">Quote</label>
      <textarea class="form-control" id="quote-text-area" rows="3" v-model="quote"></textarea>
    </div>
    <button class="btn btn-primary d-block mx-auto" @click="emitQuote">Add Quote</button>
  </div>
</template>

<script>
export default {
  name: "AppQuotesForm",
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    emitQuote: function() {
      if (this.quote) {
        this.$emit("quote-added", this.quote);
      }
    }
  }
};
</script>

<style scoped>
</style>
