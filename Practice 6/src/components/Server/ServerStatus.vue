<template>
  <button
    class="list-group-item list-group-item-action"
    :class="statusClasses"
    @click="selectServer"
  >Server #{{ server.id }} | {{ server.status }}</button>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectServer() {
      eventBus.$emit("serverSelected", this.server);
    }
  },
  computed: {
    statusClasses() {
      return {
        "list-group-item-warning": this.server.status === "Unknown",
        "list-group-item-danger": this.server.status === "Critical"
      };
    }
  }
};
</script>

