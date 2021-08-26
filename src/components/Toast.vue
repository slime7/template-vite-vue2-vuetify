<template>
  <v-snackbar
    :value="show"
    bottom
    timeout="-1"
  >
    {{msg}}
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Toast',

  computed: {
    ...mapState('toast', [
      'msg',
      'show',
    ]),
  },
};
</script>
