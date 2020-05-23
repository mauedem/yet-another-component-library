<template>
    <form class="form">
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
            </div>
        </template>
    </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormField } from '@/common/constants';
import StringField from '@/components/form_fields/StringField.vue';
import NumberField from '@/components/form_fields/NumberField.vue';
import SelectField from '@/components/form_fields/SelectField.vue';

@Component({
    components: {
        stringField: StringField,
        numberField: NumberField,
        selectField: SelectField,
    },
})

/**
 * @class Form
 * @property {FormField} - поле формы
 */
export default class Form extends Vue {
    @Prop({ required: true }) fields!: FormField[];

    private answers: any = {};

    created() {
        for (const field of this.fields) {
            Vue.set(this.answers, field.name, '');
        }
    }

    private onInput(field: string, value: string): void {
        Vue.set(this.answers, field, value);

        this.$emit('input', { field, value });
    }
}
</script>
