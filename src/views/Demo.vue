<template>
    <div>
        <!-- Button -->
        <btn :color="Colors.PRIMARY">Primary</btn>
        <btn :color="Colors.SECONDARY">Secondary</btn>
        <btn :color="Colors.SUCCESS">Success</btn>
        <btn :color="Colors.WARNING">Warning</btn>
        <btn :color="Colors.DANGER">Danger</btn>
        <btn :color="Colors.INFO">Info</btn>

         <!-- Alert -->
        <alert visible
               :color="Colors.PRIMARY"
               title="Primary"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce id fermentum quam. Proin sagittis, nibh id hendrerit
                imperdiet, elit sapien laoreet elit.">

        </alert>
        <alert visible
               :color="Colors.SECONDARY"
               title="Secondary"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce id fermentum quam. Proin sagittis, nibh id hendrerit
                imperdiet, elit sapien laoreet elit.">

        </alert>
        <alert visible
               :color="Colors.SUCCESS"
               title="Success"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce id fermentum quam. Proin sagittis, nibh id hendrerit
                imperdiet, elit sapien laoreet elit.">

        </alert>
        <alert visible
               :color="Colors.WARNING"
               title="Warning"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce id fermentum quam. Proin sagittis, nibh id hendrerit
                imperdiet, elit sapien laoreet elit.">

        </alert>
        <alert visible
               :color="Colors.DANGER"
               title="Danger"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce id fermentum quam. Proin sagittis, nibh id hendrerit
                imperdiet, elit sapien laoreet elit.">

        </alert>
        <alert visible
               :color="Colors.INFO"
               title="Info"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce id fermentum quam. Proin sagittis, nibh id hendrerit
                imperdiet, elit sapien laoreet elit.">

        </alert>


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
import Vue from 'vue';
import Component from 'vue-class-component';

import { Colors } from '@/common/constants';
import Badge from '@/components/Badge.vue';
import Alert from '@/components/Alert.vue';


@Component({
    components: {
        badge: Badge,
        alert: Alert,
    },
})
export default class Demo extends Vue {
    Colors = Colors;
}
</script>

<style scoped lang="sass">
@import "../styles/main.sass"
</style>
