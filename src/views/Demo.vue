<template>
    <div>
        <!-- Button -->
        <h2>Button</h2>
        <btn>Default</btn>
        <btn :color="Colors.PRIMARY">Primary</btn>
        <btn :color="Colors.SECONDARY">Secondary</btn>
        <btn :color="Colors.SUCCESS">Success</btn>
        <btn :color="Colors.WARNING">Warning</btn>
        <btn :color="Colors.DANGER">Danger</btn>
        <btn :color="Colors.INFO">Info</btn>

         <!-- Alert -->
        <h2>Alert</h2>
        <alert visible
               title="Primary"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce id fermentum quam. Proin sagittis, nibh id hendrerit
                imperdiet, elit sapien laoreet elit.">

        </alert>
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
        <h2>Badge</h2>
        <badge>Default</badge>
        <badge :color="Colors.PRIMARY">Primary</badge>
        <badge :color="Colors.SECONDARY">Secondary</badge>
        <badge :color="Colors.SUCCESS">Success</badge>
        <badge :color="Colors.WARNING">Warning</badge>
        <badge :color="Colors.DANGER">Danger</badge>
        <badge :color="Colors.INFO">Info</badge>

        <!-- Breadcrumb -->
        <h2>Breadcrumb</h2>
        <breadcrumb :items="items"></breadcrumb>

        <!-- Spinner -->
        <h2>Spinner</h2>
        <spinner visible></spinner>
        <spinner visible
                 color="primary"></spinner>
        <spinner visible
                 color="secondary"></spinner>
        <spinner visible
                 color="success"></spinner>
        <spinner visible
                 color="warning"></spinner>
        <spinner visible
                 color="danger"></spinner>
        <spinner visible
                 color="info"></spinner>

     </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Colors } from '@/common/constants';
import Badge from '@/components/Badge.vue';
import Alert from '@/components/Alert.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Spinner from '@/components/Spinner.vue';

@Component({
    components: {
        badge: Badge,
        alert: Alert,
        breadcrumb: Breadcrumb,
        spinner: Spinner,
    },
})
export default class Demo extends Vue {
    Colors = Colors;

    /* Breadcrumb test */
    items: object[] = [
        {
            title: 'Home',
            link: '#',
        },
        {
            title: 'Library',
            link: '#',
        },
        {
            title: 'Data',
            link: '#',
        },
    ];
}
</script>

<style scoped lang="sass">
@import "../styles/main.sass"
</style>
