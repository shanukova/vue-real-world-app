<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
<<<<<<< HEAD
      <span>@{{ event.time }} on {{ event.date }}</span>
=======
      <span>@ {{ event.time }} on {{ event.date }}</span>
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
<<<<<<< HEAD
=======
  name: 'EventCard',
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<<<<<<< HEAD
=======
<!-- Add "scoped" attribute to limit CSS to this component only -->
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
