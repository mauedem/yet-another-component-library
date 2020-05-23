<template>
    <div class="field">
        <btn class="field__note-button"
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
               type="text"
               :id="name"
               :name="name"
               v-model="mutableValue">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

/**
 * @class StringField
 * @property {string} value - значение инпута
 * @property {string} label - заголовок инпута
 * @property {string} name - уникальное название
 * @property {string} note - подсказка
 */
@Component
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

    private noteVisible = false;

    private toggleNoteVisible(): void {
        this.noteVisible = !this.noteVisible;
    }
}
</script>
