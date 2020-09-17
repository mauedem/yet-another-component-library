<template>
    <div class="form">
        <template v-for="field in fields">
            <div class="form__field" :key="'form_field' + field.name">
                <string-field v-if="field.type === 'string'"
                              :name="field.name"
                              :label="field.label"
                              :note="field.note"
                              :value="answers[field.name]"
                              @input="(value) => { onInput(field.name, value) }" />

                <number-field v-else-if="field.type === 'number'"
                              :name="field.name"
                              :label="field.label"
                              :note="field.note"
                              :value="answers[field.name]"
                              @input="(value) => { onInput(field.name, value) }"/>

                <select-field v-else-if="field.type === 'select'"
                              :name="field.name"
                              :label="field.label"
                              :note="field.note"
                              :options="field.options"
                              :value="answers[field.name]"
                              @input="(value) => { onInput(field.name, value) }">
                </select-field>

                <country-field v-else-if="field.type === 'country'"
                               :name="field.name"
                               :label="field.label"
                               :note="field.note"
                               :value="answers[field.name]"
                               @input="(value) => { onInput(field.name, value) }">
                </country-field>

                <radio-field v-else-if="field.type === 'radio'"
                             :name="field.name"
                             :label="field.label"
                             :note="field.note"
                             :options="field.options"
                             :value="answers[field.name]"
                             @input="(value) => { onInput(field.name, value) }"
                             :inline="field.inline">
                </radio-field>

                <checkbox-field v-else-if="field.type === 'checkbox'"
                                :name="field.name"
                                :label="field.label"
                                :note="field.note"
                                :options="field.options"
                                :value="answers[field.name]"
                                @input="(value) => { onInput(field.name, value) }"
                                :inline="field.inline">
                </checkbox-field>

                <date-field v-else-if="field.type === 'date'"
                            :name="field.name"
                            :label="field.label"
                            :note="field.note"
                            :value="answers[field.name]"
                            @input="(value) => { onInput(field.name, value) }">
                </date-field>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormField } from '@/common/constants';
import StringField from '@/components/form_fields/StringField.vue';
import NumberField from '@/components/form_fields/NumberField.vue';
import SelectField from '@/components/form_fields/SelectField.vue';
import RadioField from '@/components/form_fields/RadioField.vue';
import CheckboxField from '@/components/form_fields/CheckboxField.vue';
import CountryField from '@/components/form_fields/CountryField.vue';
import DateField from '@/components/form_fields/DateField/Index.vue';

/**
 * @class Form
 * @property {FormField} fields - поля формы
 */
@Component({
    components: {
        StringField,
        NumberField,
        SelectField,
        CountryField,
        RadioField,
        CheckboxField,
        DateField,
    },
})
export default class Form extends Vue {
    @Prop({ required: true }) fields!: FormField[];

    private answers: any = {};

    created() {
        for (const field of this.fields) {
            if (field.type === 'checkbox') {
                Vue.set(this.answers, field.name, []);
            } else {
                Vue.set(this.answers, field.name, '');
            }
        }
    }

    private onInput(field: string, value: string): void {
        console.log('on input', field, value);

        Vue.set(this.answers, field, value);

        this.$emit('input', { field, value });
    }
}
</script>
