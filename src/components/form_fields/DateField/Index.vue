<template>
    <div class="field">
        <field-layout :note="note"
                      :name="name"
                      :label="label" />

        <input class="field__input"
               @click="toggleDatepickerVisible">

        <!--<div v-show="visible"
             class="date">
            <input type="date">
        </div>-->
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import FieldLayout from '@/layouts/FieldLayout.vue';

/**
 * @class DateField
 * @property { string } name - уникальное название
 * @property { string } label - заголовок инпута
 * @property { string } value - значение инпута
 * @property { string } note - подсказка
 */
@Component({
    components: {
        'field-layout': FieldLayout,
    },
})
export default class DateField extends Vue {
    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) value!: string;

    @Prop(String) note?: string;

    private visible = false;

    get mutableValue() {
        return this.value;
    }

    set mutableValue(value) {
        this.$emit('input', value);
    }

    private toggleDatepickerVisible(): void {
        this.visible = !this.visible;
    }
}
</script>
