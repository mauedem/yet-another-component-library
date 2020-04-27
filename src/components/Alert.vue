<template>
    <transition name="fade">
        <div v-show="visible"
             role="alert"
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
                 @click="visible = false">
                <img class="alert__image"
                     src="../assets/icons/x.svg" alt="Закрыть">
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
import { Colors } from '@/common/constants';

/**
 * @class Alert
 * @property {Colors} color - цвет уведомления
 * @property {string} title - название уведомления
 * @property {string} content - тело уведомления
 * @property {boolean} visible - видимость уведомления
 */
@Component
export default class Alert extends Vue {
    Colors = Colors;

    @Prop() color?: Colors;

    @Prop(Boolean) visible!: boolean;

    @Prop({ required: true }) title!: string;

    @Prop({ required: true }) content!: string;
}
</script>
