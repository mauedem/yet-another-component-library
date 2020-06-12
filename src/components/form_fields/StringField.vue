<template>
    <div class="field">
        <field-layout :note="note"
                      :name="name"
                      :label="label" />

        <input class="field__input"
               type="text"
               :id="name"
               :name="name"
               v-model="mutableValue">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import FieldLayout from '@/layouts/FieldLayout.vue';

/**
 * @class StringField
 * @property {string} value - значение инпута
 * @property {string} label - заголовок инпута
 * @property {string} name - уникальное название
 * @property {string} note - подсказка
 */
@Component({
    components: {
        'field-layout': FieldLayout,
    },
})
export default class StringField extends Vue {
    @Prop({ required: true }) value!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) name!: string;

    @Prop(String) note?: string;

    get mutableValue() {
        return this.value;
    }

    set mutableValue(value) {
        this.$emit('input', value);
    }
}
</script>
