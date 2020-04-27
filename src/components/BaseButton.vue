<template>
    <button type="button"
            class="btn"
            @click="onClick"
            :class="{
                'btn--primary': color === Colors.PRIMARY,
                'btn--secondary': color === Colors.SECONDARY,
                'btn--success': color === Colors.SUCCESS,
                'btn--warning': color === Colors.WARNING,
                'btn--danger': color === Colors.DANGER,
                'btn--info': color === Colors.INFO,
            }">
        <slot />
    </button>
</template>

<script lang="ts">
import {
    Vue, Component, Prop, Emit,
} from 'vue-property-decorator';
import { Colors } from '@/common/constants';

/**
 * @class BaseButton
 * @property {Colors} color - цвет кнопки
 * @method onClick - вызывает событие по клику на кнопку
 */
@Component
export default class BaseButton extends Vue {
    Colors = Colors;

    @Prop() color?: Colors;

    @Emit('click')
    onClick() {
        this.$emit('click');
    }
}
</script>
