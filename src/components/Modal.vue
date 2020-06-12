<template>
    <transition name="modal-animation">
        <div class="modal"
             v-show="visible"
             @click.self="hide"
             :class="{
                 'modal--primary': color === Colors.PRIMARY,
                 'modal--secondary': color === Colors.SECONDARY,
                 'modal--success': color === Colors.SUCCESS,
                 'modal--warning': color === Colors.WARNING,
                 'modal--danger': color === Colors.DANGER,
                 'modal--info': color === Colors.INFO,
             }">
            <div class="modal__container"
                 :style="{ width: modalWidth + 'px'}">

                <!-- Header -->
                <h2 v-if="simpleHeader"
                    class="modal__header"
                    v-text="header">
                </h2>

                <slot v-else
                      name="custom-header"></slot>

                <!-- Body -->
                <p v-if="simpleBody"
                   class="modal__body"
                   v-text="body">
                </p>

                <slot v-else
                      name="custom-body"></slot>

                <btn class="modal__footer"
                     :class="{
                        'btn--primary': color === Colors.PRIMARY,
                        'btn--secondary': color === Colors.SECONDARY,
                        'btn--success': color === Colors.SUCCESS,
                        'btn--warning': color === Colors.WARNING,
                        'btn--danger': color === Colors.DANGER,
                        'btn--info': color === Colors.INFO,
                     }"
                     @click="hide">
                    OK
                </btn>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Color } from '@/common/constants';

/**
 * @class Modal
 * @property {Color} color - цвет модального окна
 * @property {boolean} visible - видимость модального окна
 * @property {string} modalWidth - ширина модального окна
 * @property {boolean} simpleHeader - дефолтный заголовок окна
 * @property {boolean} simpleBody - дефолтное тело модального окна
 * @property {boolean} header - пользовательский заголовок модального окна
 * @property {boolean} body - пользовское тело модального окна
 */
@Component
export default class Modal extends Vue {
    Colors = Color;

    @Prop({ required: true }) color!: Color;

    @Prop({ default: '300' }) modalWidth?: string;

    @Prop({ default: true }) simpleHeader?: boolean;

    @Prop({ default: true }) simpleBody?: boolean;

    @Prop() header?: string;

    @Prop() body?: string;

    @Prop({ required: true }) visible!: boolean;

    private hide(): void {
        this.$emit('update:visible', false);
    }
}
</script>
