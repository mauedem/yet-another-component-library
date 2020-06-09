import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class FormLabelAndNote extends Vue {
    private noteVisible = false;

    private toggleNoteVisible(): void {
        this.noteVisible = !this.noteVisible;
    }
}
