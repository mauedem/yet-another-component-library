<template>
    <input type="text"
           v-model="mutableValue"
           @blur="clearInputIfDateIsInvalid"
           :ref="'dateStringInput__' + name"
           :id="name"
           :name="name"
           class="date-string-input">
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import * as moment from 'moment';

/**
 * @class DateStringInput
 * @property { string } name - уникальное название
 * @property { string } label - заголовок инпута
 * @property { string } value - значение инпута
 * @property { string } note - подсказка
 * @property { string } format - формат даты
 */
@Component({
    components: {
    },
})
export default class DateStringInput extends Vue {
    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) value!: string;

    @Prop(String) note?: string;

    @Prop({ default: 'DD.MM.YYYY' }) format!: string;

    private input?: HTMLInputElement;

    private inputInitialize(): void {
        const refString = `dateStringInput__${this.name}`;
        const refInput = this.$refs[refString];

        if (refInput instanceof Array) {
            this.input = refInput[0] as HTMLInputElement;
        } else {
            this.input = refInput as HTMLInputElement;
        }
    }

    get mutableValue() {
        return this.value;
    }

    set mutableValue(value) {
        if (this.isValidDateString(value)) {
            this.$emit('input', value);
        }
    }

    private clearInputIfDateIsInvalid(): void {
        if (this.input && !(this.isValidDateString(this.input.value))) {
            this.input.value = '';
        }
    }

    private isValidDateString(value: string): boolean {
        return moment.parseZone(value, this.format, true).isValid();
    }

    mounted() {
        this.inputInitialize();
    }
}
</script>
