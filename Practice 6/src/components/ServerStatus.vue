<template>
    <li class="list-group-item" :class="listItemClasses">
        Server #{{ serverId }} | {{ serverStatus }}
        <button @click="selectServer">Select</button>
    </li>
</template>

<script>
import { eventBus } from "../main";

export default {
    props: {
        serverId: {
            type: Number,
            required: true
        },
        serverStatus: {
            type: String,
            requried: true
        }
    },
    methods: {
        selectServer() {
            eventBus.$emit("serverSelected", {
                id: this.serverId,
                status: this.serverStatus
            });
        }
    },
    computed: {
        listItemClasses() {
            return {
                "list-group-item-warning": this.serverStatus === "Unknown",
                "list-group-item-danger": this.serverStatus === "Critical"
            };
        }
    }
};
</script>

