<template>
  <p>Edit the event here</p>
</template>

<script>
export default {
  props: ['event'],
  data: function() {
    return {
<<<<<<< HEAD
      unsavedChanges: false
=======
      unsavedChanges: true
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c
    }
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
<<<<<<< HEAD
        return false // <-- Cancels the navigation
=======
        return false
>>>>>>> 4f03e79d02e7e30ebc7fc75c545e7bf1fdda452c
      }
    }
  }
}
</script>
