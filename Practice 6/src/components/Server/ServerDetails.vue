<template>
    <p v-if="!server">No Server selected.</p>
    <div v-else>
        <p>Server id: {{ server.id }}</p>
        <p>Server status: {{ server.status }}</p>
        <button class="btn btn-primary" @click="resetStatus">Reset Status</button>
    </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
    data() {
        return {
            server: null
        };
    },
    methods: {
        resetStatus() {
            this.server.status = "Normal";
        }
    },
    created() {
        eventBus.$on("serverSelected", server => {
            this.server = server;
        });
    }
};
</script>
