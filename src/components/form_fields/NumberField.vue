<template>
    <div class="field">
        <field-layout :note="note"
                      :name="name"
                      :label="label">

            <input class="field__input"
                   type="number"
                   :id="name"
                   :name="name"
                   v-model="mutableValue">
        </field-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import FieldLayout from '@/layouts/FieldLayout.vue';

/**
 * @class NumberField
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {number} value - значение инпута
 * @property {string} note - подсказка
 */
@Component({
    components: {
        'field-layout': FieldLayout,
    },
})
export default class NumberField extends Vue {
    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) value!: number;

    @Prop(String) note?: string;

    get mutableValue() {
        return String(this.value);
    }

    set mutableValue(value) {
        this.$emit('input', Number(value));
    }
}
</script>
