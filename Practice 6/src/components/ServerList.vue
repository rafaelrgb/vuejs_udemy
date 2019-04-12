<template>
    <ul class="list-group">
        <p6-server-status
            v-for="server in servers"
            :key="server.id"
            :serverId="server.id"
            :serverStatus="server.status"
        ></p6-server-status>
    </ul>
</template>

<script>
import { eventBus } from "../main";
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
    },
    created() {
        eventBus.$on("serverEdited", newData => {
            for (var i = 0; i < this.servers.length; i++) {
                if (this.servers[i].id == newData.id) {
                    this.servers[i].status = newData.status;
                }
            }
        });
    }
};
</script>
