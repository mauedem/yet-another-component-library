<template>
    <div class="field">
        <btn class="field__note-button"
             @click="toggleNoteVisible">
            <img class="field__note-image"
                 src="../../assets/icons/question-circle.svg"
                 alt="Подсказка">
        </btn>

        <label class="field__label"
               :for="name">
            {{ label }}
        </label>

        <p v-show="noteVisible"
            class="field__note">
            {{ note }}
        </p>

        <btn class="field__input"
             @click="toggleOptionsVisible"
             :name="name"
             :id="name">
            {{ selectedLabel }}

            <template #icon>
                <img v-if="!visible"
                     class="select__icon"
                     src="../../assets/icons/caret-down-fill.svg"
                     alt="Показать">

                <img v-else
                     class="select__icon"
                     src="../../assets/icons/caret-up-fill.svg"
                     alt="Скрыть">
            </template>
        </btn>

        <!-- TODO сделать поиск по опциям + анимацию к нему -->
        <transition name="select-animation">
            <div v-show="visible"
                 class="select">
                <input class="select__input"
                       type="text"
                       placeholder="Search"
                       v-model="searchedText">

                <div v-for="option in filteredOptions"
                     :key="'option' + option.value"
                     class="select__option"
                     :value="option.value"
                     @click="select(option.value, option.label)">
                    {{ option.label }}
                </div>

            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SelectOption } from '@/common/constants';

/**
 * @class SelectField
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {string} note - подсказка
 * @property {string} label - значение инпута
 * @property {SelectOption[]} options - опции селекта
 */
@Component
export default class SelectField extends Vue {
    @Prop({ required: true }) value!: string;

    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) options!: SelectOption[];

    @Prop(String) note?: string;

    private searchedText = '';

    get filteredOptions() {
        const result: SelectOption[] = [];

        if (!this.searchedText) {
            return this.options;
        }

        for (const option of this.options) {
            if (option.label.indexOf(this.searchedText) !== -1) {
                result.push(option);
            }
        }

        return result;
    }

    get mutableValue() {
        return this.value;
    }

    set mutableValue(value) {
        this.$emit('input', value);
    }

    private visible = false;

    private toggleOptionsVisible(): void {
        this.visible = !this.visible;
    }

    private selectedLabel = '';

    private select(value: string, label: string): void {
        this.mutableValue = value;

        this.selectedLabel = label;

        this.visible = false;
    }

    private noteVisible = false;

    private toggleNoteVisible(): void {
        this.noteVisible = !this.noteVisible;
    }
}
</script>
