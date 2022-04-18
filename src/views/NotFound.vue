<template>
<<<<<<< HEAD
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
=======
  <div>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
  </div>
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>
