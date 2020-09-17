<template>
    <div class="field">
        <field-layout :note="note"
                      :name="name"
                      :label="label">

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
        </field-layout>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { CheckboxOption } from '@/common/constants';
import FieldLayout from '@/layouts/FieldLayout.vue';

/**
 * @class CheckboxField
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {string} value - значение инпута
 * @property {string} note - подсказка
 * @property {CheckboxOption[]} options - опции чекбокса
 * @property {boolean} inline - отображать в строку (столбик по дефолту)
 */
@Component({
    components: {
        'field-layout': FieldLayout,
    },
})
export default class CheckboxField extends Vue {
    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) value!: string[];

    @Prop(String) note?: string;

    @Prop({ required: true }) options!: CheckboxOption[];

    @Prop({ default: false }) inline?: boolean

    get mutableValue(): string[] {
        return this.value;
    }

    set mutableValue(value) {
        this.$emit('input', value);
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
