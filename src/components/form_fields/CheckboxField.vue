<template>
    <div class="field">
        <btn v-show="note"
             class="field__note-button"
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

        <div>
            <div class="checkbox"
                 :class="{ 'checkbox--inline': inline }"
                 v-for="option in options"
                 :key="'option' + option.value">
                <input class="checkbox__input"
                       type="checkbox"
                       :name="name"
                       :id="'option' + option.value"
                       :value="option.value"
                       v-model="checkedOptions">

                <label class="checkbox__label"
                       :for="'option' + option.value">
                    {{ option.label }}
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { CheckboxOption } from '@/common/constants';

/**
 * @class CheckboxField
 * @property {string} value - значение инпута
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {CheckboxOption[]} options - опции чекбокса
 * @property {string} note - подсказка
 * @property {boolean} inline - отображать в строку (столбик по дефолту)
 */
@Component
export default class CheckboxField extends Vue {
    @Prop({ required: true }) value!: string[];

    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) options!: CheckboxOption[];

    @Prop(String) note?: string;

    @Prop({ default: false }) inline?: boolean

    get mutableValue(): string[] {
        return this.value;
    }

    set mutableValue(value) {
        this.$emit('input', value);
    }

    private noteVisible = false;

    private toggleNoteVisible(): void {
        this.noteVisible = !this.noteVisible;
    }

    @Watch('checkedOptions')
    updateValue(newValue: string[]) {
        this.mutableValue = newValue;
    }

    checkedOptions: string[] = [];

    created() {
        this.checkedOptions = this.mutableValue || [];
    }
}
</script>
