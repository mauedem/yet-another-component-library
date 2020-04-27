<template>
    <div>
        <!-- Badge -->
        <badge :color="Colors.PRIMARY">Primary</badge>
        <badge :color="Colors.SECONDARY">Secondary</badge>
        <badge :color="Colors.SUCCESS">Success</badge>
        <badge :color="Colors.WARNING">Warning</badge>
        <badge :color="Colors.DANGER">Danger</badge>
        <badge :color="Colors.INFO">Info</badge>
    </div>

</template>

<script lang="ts">
import { Colors } from '@/common/constants';
import Vue from 'vue';
import Component from 'vue-class-component';
import Badge from '@/components/Badge.vue';


@Component({
    components: {
        badge: Badge,
    },
})
export default class Demo extends Vue {
    Colors = Colors;
}
</script>

<style scoped lang="sass">
@import "../styles/main.sass"
</style>
