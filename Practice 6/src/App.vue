<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p6-header></p6-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <p6-server-list></p6-server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p6-server-details></p6-server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <p6-footer></p6-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import ServerList from './components/Server/ServerList.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import Footer from './components/Shared/Footer.vue';

    export default {
        components: {
            'p6-header': Header,
            'p6-server-list': ServerList,
            'p6-server-details': ServerDetails,
            'p6-footer': Footer
        }
    }
</script>
