<template>
  <div class="container">
    <div class="row mt-5 mb-4">
      <div class="col">
        <app-progress-bar :quotesCount="quotesCount" :maxQuotes="maxQuotes"></app-progress-bar>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
        <app-quotes-form @quote-added="addQuote"></app-quotes-form>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <app-quotes :quotes="quotes" @quote-clicked="removeQuote"></app-quotes>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="alert alert-info text-center">Info: click on a quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProgressBar from "./components/ProgressBar.vue";
import AppQuotesForm from "./components/QuotesForm.vue";
import AppQuotes from "./components/Quotes.vue";

export default {
  components: {
    "app-progress-bar": AppProgressBar,
    "app-quotes-form": AppQuotesForm,
    "app-quotes": AppQuotes
  },
  data: function() {
    return {
      quotes: ["Just a Quote to start with something!"],
      maxQuotes: 10
    };
  },
  methods: {
    addQuote: function(quote) {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.push(quote);
      }
    },
    removeQuote: function(idx) {
      this.quotes.splice(idx, 1);
    }
  },
  computed: {
    quotesCount: function() {
      return this.quotes.length;
    }
  }
};
</script>

<style>
</style>
