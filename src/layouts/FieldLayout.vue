<template>
    <div>
        <btn v-show="note"
             class="field__note-button"
             @click="toggleNoteVisible">
            <img class="field__note-image"
                 src="../assets/icons/question-circle.svg"
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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * @class FieldLayout
 * @property {string} name - уникальное название
 * @property {string} label - заголовок инпута
 * @property {string} note - подсказка
 */
@Component
export default class FieldLayout extends Vue {
    @Prop(String) note?: string;

    @Prop({ required: true }) name!: string;

    @Prop({ required: true }) label!: string;

    private noteVisible = false;

    private toggleNoteVisible(): void {
        this.noteVisible = !this.noteVisible;
    }
}
</script>
