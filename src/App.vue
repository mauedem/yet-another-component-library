<template>
  <div>
      <demo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Demo from '@/views/Demo.vue';

@Component({
    components: {
        demo: Demo,
    },
})

export default class App extends Vue {}
</script>

<style lang="sass">
@import "styles/main.sass"
</style>
