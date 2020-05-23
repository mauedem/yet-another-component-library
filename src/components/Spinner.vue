<template>
    <div v-show="visible"
         class="spinner"
         :class="{
             'spinner--primary': color === Colors.PRIMARY,
             'spinner--secondary': color === Colors.SECONDARY,
             'spinner--success': color === Colors.SUCCESS,
             'spinner--warning': color === Colors.WARNING,
             'spinner--danger': color === Colors.DANGER,
             'spinner--info': color === Colors.INFO,
         }">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Color } from '@/common/constants';

/**
 * @class Spinner
 * @property {Color} color - цвет спинера
 * @property {boolean} visible - видимость спинера
 */
@Component
export default class Spinner extends Vue {
    Colors = Color;

    @Prop({ required: true }) color!: Color;

    @Prop(Boolean) visible!: boolean;
}
</script>
