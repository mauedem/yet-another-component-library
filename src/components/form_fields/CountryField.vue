<template>
    <select-field :name="name"
                  :label="label"
                  :note="note"
                  :options="countries"
                  :value="value"
                  @input="(value) => { mutableValue(value) }">
        <template v-slot="{ value }">
            <span :class="`flag-icon flag-icon-${value.toLowerCase()}`"></span>
        </template>

        <template #option="{ name, value }">
            <span :class="`flag-icon flag-icon-${value.toLowerCase()}`"></span>
            {{ name }}
        </template>
    </select-field>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SelectOption, CountryList } from '@/common/constants';
import SelectField from './SelectField.vue';

@Component({
    components: {
        'select-field': SelectField,
    },
})
/**
 * @class CountryField
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {string} note - подсказка
 * @property {string} value - значение инпута
 */
export default class CountryField extends Vue {
    @Prop({ required: true }) value!: string;

    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop(String) note?: string;

    private mutableValue(value: string): void {
        this.$emit('input', value);
    }

    get countries() {
        const result: SelectOption[] = [];

        for (const country of CountryList) {
            result.push({
                label: country.name,
                value: country.code,
            });
        }

        return result;
    }
}
</script>
