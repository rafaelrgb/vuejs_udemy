<template>
    <div class="row">
      <div class="col-sm-6">
        <slot name="title"></slot>
      </div>
      <div class="col-sm-6">
        <slot name="body"></slot>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
