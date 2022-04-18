<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
<<<<<<< HEAD
      // Call to API
      // If registered then redirect to event details

      this.GStore.flashMessage =
        'You are successfully registered for ' + this.event.title
=======
      // Call API
      this.GStore.flashMessage = `You are successfully registered for ${this.event.title}!`
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
<<<<<<< HEAD

=======
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c
      this.$router.push({
        name: 'EventDetails'
      })
    }
  }
}
</script>
