<template>
  <div class="simple-dialog-frame">
    <v-dialog
      class="simple-dialog"
      v-for="(dialog, index) in dialogs"
      :key="`simple-dialog-${index}`"
      v-bind="dialog.attr"
      @input="close"
    >
      <v-card>
        <v-card-title :class="titleClass">{{dialog.title}}</v-card-title>

        <v-card-text v-html="dialog.content"></v-card-text>
        <v-card-text v-if="dialog.type === 'loading'">
          <div class="d-flex align-center justify-center ma-4">
            <v-progress-circular
              indeterminate
              color="primary"
              size="96"
              width="12"
            ></v-progress-circular>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="close">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      class="simple-dialog loader"
      content-class="no-shadow"
      :value="loader"
      width="96"
      persistent
      no-click-animation
      overlay-opacity="0"
    >
      <div>
        <v-sheet
          class="loader-wrapper ma-4 d-flex align-center justify-center"
          rounded="circle"
          elevation="6"
        >
          <v-progress-circular
            indeterminate
            color="primary"
            size="32"
            width="4"
          ></v-progress-circular>
        </v-sheet>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SimpleDialog',
  computed: {
    ...mapState('dialog', [
      'dialogs',
      'titleClass',
      'loader',
    ]),
  },
  methods: {
    close() {
      this.$store.dispatch('dialog/close');
    },
    hideLoader() {
      this.$store.dispatch('dialog/hideLoader');
    },
  },
};
</script>

<style lang="scss">
.v-dialog.no-shadow {
  box-shadow: none;
}

.loader-wrapper {
  width: 64px;
  height: 64px;
}
</style>
