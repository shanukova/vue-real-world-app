<template>
  <p>Edit the event here</p>
</template>

<script>
export default {
  props: ['event'],
  data: function() {
    return {
      unsavedChanges: false  // <-- Flag gets set to true if anything
                             //          is changed on the form
    }
  },
  beforeRouteLeave(routeTo, routeFrom) {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false // <-- Cancels the navigation
      }
    }
  }
}
</script>
