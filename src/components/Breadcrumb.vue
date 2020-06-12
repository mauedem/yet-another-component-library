<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"
            :class="{
                'breadcrumb--primary': color === Colors.PRIMARY,
                'breadcrumb--secondary': color === Colors.SECONDARY,
                'breadcrumb--success': color === Colors.SUCCESS,
                'breadcrumb--warning': color === Colors.WARNING,
                'breadcrumb--danger': color === Colors.DANGER,
                'breadcrumb--info': color === Colors.INFO,
            }">
            <li class="breadcrumb__item"
                v-for="(item, index) of items"
                :key="'breadcrumb' + index"
                :class="{ active: activeLink === index }">
                <a class="link breadcrumb__link "
                   :href="item.link"
                   @click="selectActiveLink(index)">
                    {{ item.title }}
                </a>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Color } from '@/common/constants';

/**
 * @class Breadcrumb
 * @property {Color} color - цвет спинера
 * @property {Array[]} items - массив объектов частей breadcrumb
 */
@Component
export default class Breadcrumb extends Vue {
    Colors = Color;

    @Prop() color?: Color;

    @Prop({
        type: Array,
        validator(value: any): boolean {
            const item = value;

            item.forEach(() => {
                if (typeof item !== 'object') return false;

                if (!item.title) return false;

                if (typeof item.link !== 'string') return false;

                return undefined;
            });

            return true;
        },
    }) items!: [];

    private activeLink = this.items.length - 1;

    private selectActiveLink(index: number): void {
        this.activeLink = index;
    }
}
</script>
