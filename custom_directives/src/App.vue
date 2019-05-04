<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <input type="text" class="form-control" v-myon:input="handleInput">
                <hr>
                <input type="text" class="form-control" v-myon:change="handleChange">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myon': {
                bind(el, binding, vnode) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            handleInput() {
                console.log('Input event');
            },
            handleChange() {
                console.log('Change event');
            }
        }
    }
</script>

<style>
</style>
