<template>
    <div>
        <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" class="form-control" id="first-name" :value="firstName" @input="nameChanged(true, $event)">
        </div>

        <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" class="form-control" id="last-name" :value="lastName" @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
export default {
    name: 'FullNameInput',
    props: [
        'value'
    ],
    methods: {
        nameChanged(isFirst, event) {
            let name = '';
            if (isFirst)
                name = event.target.value + ' ' + this.lastName;
            if (!isFirst)
                name = this.firstName + ' ' + event.target.value;
            this.value = name;
            this.$emit('input', this.value);
        }
    },
    computed: {
        firstName() {
            return this.value.split(' ')[0];
        },
        lastName() {
            return this.value.split(' ')[1];
        }
    }
};
</script>
