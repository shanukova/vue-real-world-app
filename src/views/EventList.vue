<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

// <template>
//   <div class="events">
//     <EventCard v-for="event in events" :key="event.id" :event="event" />
//     <div class="pagination">
//       <router-link
//         id="page-prev"
//         :to="{ name: 'EventList', query: { page: page - 1 } }"
//         rel="prev"
//         v-if="page !== 1"
//       >
//         &#60; Previous
//       </router-link>
//       <router-link
//         id="page-next"
//         :to="{ name: 'EventList', query: { page: page + 1 } }"
//         rel="next"
//         v-if="hasNextPage"
//       >
//         Next &#62;
//       </router-link>
//     </div>
//     <ul class="pages">
//       <li
//         v-for="i in howManyPages"
//         :key="i"
//         :class="i === page ? 'active-page' : ''"
//       >
//         {{ i }}
//       </li>
//     </ul>
//   </div>
// </template>

// <script>
// // @ is an alias to /src
// import EventCard from '@/components/EventCard.vue'
// import EventService from '@/services/EventService.js'

// export default {
//   name: 'EventList',
//   props: ['page'],
//   components: {
//     EventCard
//   },
//   data() {
//     return {
//       events: null,
//       totalEvents: 0
//     }
//   },
//   beforeRouteEnter(routeTo, routeFrom, next) {
//     EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
//       .then(response => {
//         next(comp => {
//           comp.events = response.data
//           comp.totalEvents = response.headers['x-total-count']
//         })
//       })
//       .catch(() => {
//         next({ name: 'NetworkError' })
//       })
//   },
//   beforeRouteUpdate(routeTo) {
//     return EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
//       .then(response => {
//         this.events = response.data
//         this.totalEvents = response.headers['x-total-count']
//       })
//       .catch(() => {
//         return { name: 'NetworkError' }
//       })
//   },
//   computed: {
//     hasNextPage() {
//       var totalPages = Math.ceil(this.totalEvents / 2)
//       return this.page < totalPages
//     },
//     howManyPages() {
//       return Math.ceil(this.totalEvents / 2)
//     }
//   }
// }
// </script>

// <style scoped>
// .events {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
// .pagination {
//   display: flex;
//   width: 290px;
// }
// .pagination a {
//   flex: 1;
//   text-decoration: none;
//   color: #2c3e50;
// }

// #page-prev {
//   text-align: left;
// }

// #page-next {
//   text-align: right;
// }
// .pages {
//   width: 15%;
//   margin-top: 25px;
//   padding: 0;
//   display: flex;
//   justify-content: space-around;
//   list-style-type: none;
// }
// .active-page {
//   color: red;
// }
// </style>
