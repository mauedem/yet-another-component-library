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
        <slot name="icon" />
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Color } from '@/common/constants';

/**
 * @class BaseButton
 * @property {Color} color - цвет кнопки
 */
@Component
export default class BaseButton extends Vue {
    Colors = Color;

    @Prop({ default: Color.PRIMARY }) color?: Color;

    private onClick(): void {
        this.$emit('click');
    }
}
</script>
