<template>
    <div class="field">
        <field-layout :note="note"
                      :name="name"
                      :label="label">

            <btn class="field__input"
                 @click="toggleOptionsVisible">

                <slot :value="value"></slot>
                {{ selectedLabel }}

                <template #icon>
                    <span v-if="!visible"
                          class="mdi mdi-play select__icon select__icon--down"></span>

                    <span v-else
                          class="mdi mdi-play select__icon select__icon--up"></span>
                </template>
            </btn>

            <transition name="select-animation">
                <div v-show="visible"
                     class="select">
                    <input class="select__input"
                           type="text"
                           placeholder="Search"
                           v-model="searchedText">

                    <div v-for="(option, index) in filteredOptions"
                         :key="index"
                         class="select__option"
                         :value="option.value"
                         @click="select(option.value, option.label)">

                        <slot name="option"
                              :label="option.label"
                              :value="option.value">
                        </slot>
                        {{ option.label }}
                    </div>
                </div>
            </transition>
        </field-layout>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SelectOption } from '@/common/constants';
import FieldLayout from '@/layouts/FieldLayout.vue';

/**
 * @class SelectField
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {string} value - значение инпута
 * @property {string} note - подсказка
 * @property {SelectOption[]} options - опции селекта
 */
@Component({
    components: {
        'field-layout': FieldLayout,
    },
})
export default class SelectField extends Vue {
    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) value!: string;

    @Prop(String) note?: string;

    @Prop({ required: true }) options!: SelectOption[];

    private searchedText = '';

    get filteredOptions() {
        const result: SelectOption[] = [];

        if (!this.searchedText) {
            return this.options;
        }

        for (const option of this.options) {
            if (option.label.indexOf(this.searchedText) !== -1) {
                result.push(option);
            }
        }

        return result;
    }

    private mutateValue(value: string): void {
        this.$emit('input', value);
    }

    private visible = false;

    private toggleOptionsVisible(): void {
        this.visible = !this.visible;
    }

    private selectedLabel = '';

    private select(value: string, label: string): void {
        this.mutateValue(value);

        this.selectedLabel = label;

        this.visible = false;
    }
}
</script>
