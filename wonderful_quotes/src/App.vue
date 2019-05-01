<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <app-progress-bar></app-progress-bar>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <app-quotes-form></app-quotes-form>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <app-quotes></app-quotes>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from "./components/shared/Header.vue";
    import AppProgressBar from "./components/quotes/ProgressBar.vue";
    import AppQuotesForm from "./components/quotes/QuotesForm.vue";
    import AppQuotes from "./components/quotes/Quotes.vue";
    import AppFooter from "./components/shared/Footer.vue";

    export default {
        components: {
            'app-header': AppHeader,
            'app-progress-bar': AppProgressBar,
            'app-quotes-form': AppQuotesForm,
            'app-quotes': AppQuotes,
            'app-header': AppFooter
        }
    }
</script>

<style>
</style>
