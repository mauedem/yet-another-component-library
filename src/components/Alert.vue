<template>
    <transition name="fade-animation">
        <div v-show="visible"
             role="alertdialog"
             :class="{
                'alert--primary': color === Colors.PRIMARY,
                'alert--secondary': color === Colors.SECONDARY,
                'alert--success': color === Colors.SUCCESS,
                'alert--warning': color === Colors.WARNING,
                'alert--danger': color === Colors.DANGER,
                'alert--info': color === Colors.INFO,
             }"
             class="alert">

            <btn class="alert__close"
                 @click="hide">
                <template #icon>
                    <span class="mdi mdi-close-circle-outline alert__icon"></span>
                </template>
            </btn>

            <h3 class="alert__header"
                v-text="title"></h3>
            <p class="alert__body"
               v-text="content"></p>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Color } from '@/common/constants';

/**
 * @class Alert
 * @property {Color} color - цвет уведомления
 * @property {string} title - название уведомления
 * @property {string} content - тело уведомления
 * @property {boolean} visible - видимость уведомления
 */
@Component
export default class Alert extends Vue {
    Colors = Color;

    @Prop({ required: true }) color!: Color;

    @Prop({ required: true }) visible!: boolean;

    @Prop({ required: true }) title!: string;

    @Prop({ required: true }) content!: string;

    private hide(): void {
        this.$emit('update:visible', false);
    }
}
</script>
