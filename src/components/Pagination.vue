<template>
    <nav class="Pagination">
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
                @click="currentPage = 1">
                <a class="link pagination__link"
                   href="#">
                    First
                </a>
            </li>

            <li class="pagination__item"
                @click="currentPage -= 1"
                :class="{ disabled: currentPage === 1 }">
                <a class="link pagination__link"
                   href="#">
                    Previous
                </a>
            </li>

            <li class="pagination__item dots"
                :class="{
                    hidden: currentPage <= 4
                }">...</li>

            <li class="pagination__item"
                v-for="(page, index) in pagesCount"
                :key="'pagination' + (index)"
                :class="{
                    active: index + 1 === currentPage,
                    hidden: (index + 1 < (currentPage - 3))
                        || (index + 1 > (currentPage + 3)),
                }"
                @click="currentPage = index + 1">
                <a class="link pagination__link"
                   href="#">{{ index + 1 }}</a>
            </li>

            <li class="pagination__item dots"
                :class="{
                    hidden: currentPage >= 27
                }">...</li>

            <li class="pagination__item"
                @click="currentPage += 1"
                :class="{ disabled: currentPage === pagesCount }">
                <a class="link pagination__link"
                   href="#">
                    Next
                </a>
            </li>

            <li class="pagination__item"
                @click="currentPage = pagesCount">
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
import { Colors } from '@/common/constants';

/**
 * @class Pagination
 * @property {Colors} color - цвет pagination
 * @property {number} pagesCount - колличество страниц
 * @property {number} currentPage - текущая страница
 */
@Component
export default class Pagination extends Vue {
    Colors = Colors;

    @Prop() color?: Colors;

    @Prop(Number) pagesCount!: number

    @Prop(Number) currentPage!: number
}
</script>
