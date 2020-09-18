<template>
    <div>
        <btn v-show="note"
             class="field__note-button"
             @click="toggleNoteVisible">

            <template #icon>
                <span class="mdi mdi-information-outline field__note-image"></span>
            </template>
        </btn>

        <label class="field__label"
               :for="name">
            {{ label }}
        </label>

        <p v-show="noteVisible"
           class="field__note">
            {{ note }}
        </p>

        <slot></slot>
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
