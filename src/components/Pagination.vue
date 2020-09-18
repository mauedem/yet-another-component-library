<template>
    <nav class="pagination">
        <ul class="pagination"
            :class="{
                'pagination--primary': color ===  Colors.PRIMARY,
                'pagination--secondary': color === Colors.SECONDARY,
                'pagination--success': color === Colors.SUCCESS,
                'pagination--warning': color === Colors.WARNING,
                'pagination--danger': color === Colors.DANGER,
                'pagination--info': color === Colors.INFO,
            }">
            <li class="pagination__item"
                @click="actualPage = 1">
                <a class="link pagination__link"
                   href="#">
                    First
                </a>
            </li>

            <li class="pagination__item"
                @click="actualPage -= 1"
                :class="{ disabled: actualPage === 1 }">
                <a class="link pagination__link"
                   href="#">
                    Previous
                </a>
            </li>

            <li class="pagination__item dots"
                :class="{ hidden: actualPage <= 4 }">
                ...
            </li>

            <li class="pagination__item"
                v-for="(page, index) in totalPages"
                :key="'pagination' + index"
                :class="{
                    active: index + 1 === actualPage,
                    hidden: isHidden(index),
                }"
                @click="actualPage = index + 1">
                <a class="link pagination__link"
                   href="#">{{ index + 1 }}</a>
            </li>

            <li class="pagination__item dots"
                :class="{ hidden: actualPage >= totalPages - 3 }">
                ...
            </li>

            <li class="pagination__item"
                @click="actualPage += 1"
                :class="{ disabled: actualPage === totalPages }">
                <a class="link pagination__link"
                   href="#">
                    Next
                </a>
            </li>

            <li class="pagination__item"
                @click="actualPage = totalPages">
                <a class="link pagination__link"
                   href="#">
                    Last
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Color } from '@/common/constants';

/**
 * @class Pagination
 * @property {Color} color - цвет pagination
<<<<<<< HEAD
 * @property {number} totalPages - количество страниц
=======
 * @property {number} totalPages - колличество страниц
>>>>>>> f62b0cd1a57fcd7c9c92049194cd510e357142d6
 * @property {number} currentPage - текущая страница
 */
@Component
export default class Pagination extends Vue {
    Colors = Color;

    @Prop({ required: true }) color!: Color;

    @Prop({ required: true }) totalPages!: number

    @Prop({ required: true }) currentPage!: number

    private actualPage = this.currentPage;

    private isHidden(index: number): boolean {
        return (index + 1 < (this.actualPage - 3))
            || (index + 1 > (this.actualPage + 3));
    }
}
</script>
