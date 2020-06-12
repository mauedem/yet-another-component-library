<template>
    <div class="field">
        <field-layout :note="note"
                      :name="name"
                      :label="label" />

        <div role="radiogroup">
            <div class="radio"
                 :class="{ 'radio--inline': inline }"
                 v-for="option in options"
                 :key="'option' + option.value">
                <input class="radio__input"
                       type="radio"
                       :name="name"
                       :id="'option' + option.value"
                       :value="option.value"
                       v-model="mutableValue">

                <label class="radio__label"
                       :for="'option' + option.value">
                    {{ option.label }}
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RadioOption } from '@/common/constants';
import FieldLayout from '@/layouts/FieldLayout.vue';

/**
 * @class RadioField
 * @property {string} value - значение инпута
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {RadioOption[]} options - опции радиокнопок
 * @property {string} note - подсказка
 * @property {boolean} inline - отображать в строку (столбик по дефолту)
 */
@Component({
    components: {
        'field-layout': FieldLayout,
    },
})
export default class RadioField extends Vue {
    @Prop({ required: true }) value!: string;

    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) options!: RadioOption[];

    @Prop(String) note?: string;

    @Prop({ default: false }) inline?: boolean

    get mutableValue() {
        return this.value;
    }

    set mutableValue(value) {
        this.$emit('input', value);
    }
}
</script>
