<template>
  <div>
      <demo />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
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
