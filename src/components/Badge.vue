<template>
    <span class="badge"
          :class="{
              'badge--primary': color === Colors.PRIMARY,
              'badge--secondary': color === Colors.SECONDARY,
              'badge--success': color === Colors.SUCCESS,
              'badge--warning': color === Colors.WARNING,
              'badge--danger': color === Colors.DANGER,
              'badge--info': color === Colors.INFO,
          }">
        <slot />
    </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Color } from '@/common/constants';

/**
 * @class Badge
 * @property {Color} color - цвет значка
 */
@Component
export default class Badge extends Vue {
    Colors = Color;

    @Prop({ required: true }) color!: Color;
}
</script>
