<template>
    <div class="field">
        <btn v-show="note"
             class="field__note-button"
             @click="toggleNoteVisible">
            <img class="field__note-image"
                 src="../../assets/icons/question-circle.svg"
                 alt="Подсказка">
        </btn>

        <label class="field__label"
               :for="name">
            {{ label }}
        </label>

        <p v-show="noteVisible"
            class="field__note">
            {{ note }}
        </p>

        <input class="field__input"
               type="number"
               :id="name"
               :name="name"
               v-model="mutableValue">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

/**
 * @class NumberField
 * @property {number} value - значение инпута
 * @property {string} label - заголовок инпута
 * @property {string} name - уникальное название
 * @property {string} note - подсказка
 */
@Component
export default class NumberField extends Vue {
    @Prop({ required: true }) value!: number;

    @Prop({ required: true }) label!: string;

    @Prop({ required: true }) name!: string;

    @Prop(String) note?: string;

    get mutableValue() {
        return String(this.value);
    }

    set mutableValue(value) {
        this.$emit('input', Number(value));
    }

    private noteVisible = false;

    private toggleNoteVisible(): void {
        this.noteVisible = !this.noteVisible;
    }
}
</script>
