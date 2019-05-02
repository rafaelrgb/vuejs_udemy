<template>
    <ul class="list-group">
        <p6-server-status
            v-for="server in servers"
            :key="server.id"
            :server="server"
        ></p6-server-status>
    </ul>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";

export default {
    data: function() {
        return {
            servers: [
                { id: 1, status: "Normal" },
                { id: 2, status: "Critical" },
                { id: 3, status: "Unknown" },
                { id: 4, status: "Normal" }
            ]
        };
    },
    components: {
        "p6-server-status": ServerStatus
    }
};
</script>
