<template>
    <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb__item"
                v-for="(item, index) of items"
                :key="'breadcrumb' + index"
                :class="{ active: activeLink === index }">
                <a class="link breadcrumb__link "
                   :href="item.link"
                   @click="activeLink = index">
                    {{ item.title }}
                </a>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

/**
 * @class Breadcrumb
 * @property {Array} items - массив объектов частей breadcrumb
 */
@Component
export default class Breadcrumb extends Vue {
    activeLink = null;

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
}
</script>
