<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <fullNameInput v-model="userData.fullName"></fullNameInput>

                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" id="email" v-model="userData.email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" v-model="userData.password">
                    </div>

                    <div class="form-group">
                        <label>Store data?</label>
                        <div class="form-check form-check-inline">
                            <input type="radio" class="form-check-input" id="store-data-yes" name="store-data" value="Yes" v-model="storeData">
                            <label class="form-check-label" for="store-data-yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" class="form-check-input" id="store-data-no" name="store-data" value="No" v-model="storeData">
                            <label class="form-check-label" for="store-data-no">No</label>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" @click.prevent="isSubmitted = true">Submit</button>
                </div>
            </div>
        </form>
        <div class="row" v-else>
            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Your Data</h4>
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullNameInput from './components/FullNameInput.vue';

    export default {
        components: {
            fullNameInput: FullNameInput
        },
        data() {
            return {
                userData: {
                    fullName: '',
                    email: '',
                    password: ''
                },
                storeData: 'Yes',
                isSubmitted: false
            }
        }
    }
</script>

<style>
</style>
