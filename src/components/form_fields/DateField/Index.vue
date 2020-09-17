<template>
    <div class="field">
        <field-layout :note="note"
                      :name="name"
                      :label="label">

            <date-string-input class="field__input"
                               @focus.native="showCalendar"
                               :name="name"
                               :label="label"
                               :note="note"
                               :value="value"
                               @input="value => { mutateValue(value) }">
            </date-string-input>

            <btn class="date-string-input__icon">
                <template #icon>
                    <span v-if="!calendarVisible"
                          class="mdi mdi-calendar-check date-string-input__icon"></span>

                    <span v-else
                          class="mdi mdi-calendar-blank date-string-input__icon"></span>
                </template>
            </btn>

            <calendar v-show="calendarVisible"></calendar>
        </field-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Calendar from './Calendar.vue';
import DateStringInput from './DateStringInput.vue';
import FieldLayout from '../../../layouts/FieldLayout.vue';

/**
 * @class DateField
 * @property { string } name - уникальное название
 * @property { string } label - заголовок инпута
 * @property { string } value - значение инпута
 * @property { string } note - подсказка
 */
@Component({
    components: {
        calendar: Calendar,
        'date-string-input': DateStringInput,
        'field-layout': FieldLayout,
    },
})
export default class DateField extends Vue {
    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) value!: string;

    @Prop(String) note?: string;

    private mutateValue(value: string): void {
        this.$emit('input', value);

        this.calendarVisible = false;
    }

    private calendarVisible = false;

    private showCalendar(): void {
        this.calendarVisible = true;
    }
}
</script>
