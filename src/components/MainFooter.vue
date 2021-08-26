<template>
<footer>
  <toast/>
  <simple-dialog/>
</footer>
</template>

<script>
import Toast from './Toast.vue';
import SimpleDialog from './SimpleDialog.vue';

export default {
  name: 'MainFooter',
  components: {
    Toast,
    SimpleDialog,
  },
};
</script>
