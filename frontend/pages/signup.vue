<template>
  <section class="container">
    <div class="grid md:grid-cols-1 mt-3">
        <div class="w-full max-w-md my-0 mx-auto">
            <form class="px-8 pt-6 pb-8 mb-4" autocomplete="off" @submit.stop.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input id="username" type="text" placeholder="Enter your username" v-model="username" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        First Name
                    </label>
                    <input id="first_name" type="text" placeholder="Enter your first name" v-model="first_name" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Last Name
                    </label>
                    <input id="last_name" type="text" placeholder="Enter your last name" v-model="last_name" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="Enter your email" v-model="email" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="Enter your password" v-model="password" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
                <p class="text-center mt-3">
                    Already have an account?
                    <nuxt-link to="/signin">
                        Login
                    </nuxt-link>
                </p>
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      first_name: '',
      last_name: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await this.$strapi.register({
            email: this.email,
            username: this.username,
            password: this.password,
            first_name: this.first_name,
            last_name: this.last_name
        })
        this.loading = false
        this.setUser(response.user)
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>
