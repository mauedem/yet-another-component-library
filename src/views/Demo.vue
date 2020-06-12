<template>
    <div class="demo">
        <h1>Components</h1>

        <!-- Buttons -->
        <h2>Button</h2>

        <div class="demo-block">
            <div>
                <div v-for="color in Colors"
                     :key="'button' + color">
                    <input type="radio"
                           :id="'button' + color"
                           :name="'button' + color"
                           v-model="buttonColor"
                           :value="color">

                    <label :for="'button' + color">
                        {{ capitalize(color) }}
                    </label>
                </div>
            </div>

            <btn :color="buttonColor">Some button</btn>

        </div>

         <!-- Alerts -->
        <h2>Alert</h2>

        <div class="demo-block">
            <div>
                <div v-for="color in Colors"
                     :key="'alert' + color">
                    <input type="radio"
                           :id="'alert' + color"
                           :name="'alert' + color"
                           v-model="alertColor"
                           :value="color">

                    <label :for="'alert' + color">
                        {{ capitalize(color) }}
                    </label>
                </div>
            </div>

            <div v-if="showAlert === true">
                <alert :visible.sync="showAlert"
                       :color="alertColor"
                       :title="capitalize(alertColor)"
                       :content="alertText" />
            </div>

            <div v-else>
                <btn @click="showAlert = true"
                     :color="alertColor">
                    Reset Alert
                </btn>
            </div>

        </div>

        <!-- Badges -->
        <h2>Badge</h2>

        <div class="demo-block">
            <div>
                <div v-for="color in Colors"
                     :key="'badge' + color">
                    <input type="radio"
                           :id="'badge' + color"
                           :name="'badge' + color"
                           v-model="badgeColor"
                           :value="color">

                    <label :for="'badge' + color">
                        {{ capitalize(color) }}
                    </label>
                </div>
            </div>

            Some text
            <badge :color="badgeColor">
                {{ capitalize(badgeColor) }}
            </badge>
        </div>

        <!-- Breadcrumbs -->
        <h2>Breadcrumb</h2>

         <div class="demo-block">
            <div>
                <div v-for="color in Colors"
                     :key="'breadcrumb' + color">
                    <input type="radio"
                           :id="'breadcrumb' + color"
                           :name="'breadcrumb' + color"
                           v-model="breadcrumbColor"
                           :value="color">

                    <label :for="'breadcrumb' + color">
                        {{ capitalize(color) }}
                    </label>
                </div>
            </div>

            <breadcrumb :items="items"
                        :color="breadcrumbColor"/>
        </div>

        <!-- Spinners -->
        <h2>Spinner</h2>

        <div class="demo-block">
            <div>
                <div v-for="color in Colors"
                     :key="'spinner' + color">
                    <input type="radio"
                           :id="'spinner' + color"
                           :name="'spinner' + color"
                           v-model="spinnerColor"
                           :value="color">

                    <label :for="'spinner' + color">
                        {{ capitalize(color) }}
                    </label>
                </div>
            </div>
            <spinner visible
                     :color="spinnerColor" />
        </div>

        <!-- Pagination -->
        <h2>Pagination</h2>

        <div class="demo-block">
            <div>
                <div v-for="color in Colors"
                     :key="'pagination' + color">
                    <input type="radio"
                           :id="'pagination' + color"
                           :name="'pagination' + color"
                           v-model="paginationColor"
                           :value="color">

                    <label :for="'pagination' + color">
                        {{ capitalize(color) }}
                    </label>
                </div>
            </div>

            <pagination :total-pages="30"
                        :current-page="15"
                        :color="paginationColor">
            </pagination>
        </div>

        <!-- Modals -->
        <h2>Modal</h2>

        <div class="demo-block-types">
            <div class="demo-block__item"
                 v-for="type in ModalTypes"
                 :key="'modal' + type">
                <input type="radio"
                       :id="'modal' + type"
                       :name="'modal' + modalType"
                       v-model="modalType"
                       :value="type">
                <label :for="'modal' + type">
                    {{ deleteUnderscores(type) }}
                </label>
            </div>
        </div>

        <div class="demo-block">
            <div>
                <div v-for="color in Colors"
                     :key="'modal' + color">
                    <input type="radio"
                           :id="'modal' + color"
                           :name="'model' + modalColor"
                           v-model="modalColor"
                           :value="color">

                    <label :for="'modal' + color">
                        {{ capitalize(color) }}
                    </label>
                </div>
            </div>

            <!-- Modal with slots -->
            <div v-if="modalType === 'with_slots'">
                <btn @click="showModal = true"
                     :color="modalColor">Show modal</btn>
                <modal modal-width="500"
                       :visible.sync="showModal"
                       :color="modalColor"
                       :simple-header="false"
                       :simple-body="false">
                    <template #custom-header>
                        <h1>Far far away</h1>
                    </template>

                    <template #custom-body>
                        <p>{{ modalText }}</p>
                    </template>
                </modal>
            </div>

            <!-- Modal without slots -->
            <div v-else>
                <btn @click="showModal = true"
                     :color="modalColor">Show modal</btn>
                <modal modal-width="500"
                       :visible.sync="showModal"
                       :color="modalColor"
                       header="Far far away"
                       :body="modalText" />
            </div>

        </div>

        <!-- Forms -->
        <h2>Form</h2>

        <Form :fields="testFormFields"
              @input="onFormInput" />

    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Color, FieldType, ModalType } from '@/common/constants';

import Badge from '@/components/Badge.vue';
import Alert from '@/components/Alert.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Spinner from '@/components/Spinner.vue';
import Pagination from '@/components/Pagination.vue';
import Modal from '@/components/Modal.vue';
import Form from '@/components/Form.vue';

@Component({
    components: {
        badge: Badge,
        alert: Alert,
        breadcrumb: Breadcrumb,
        spinner: Spinner,
        pagination: Pagination,
        modal: Modal,
        Form,
    },
})
export default class Demo extends Vue {
    private alertText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'
        + 'Fusce id fermentum quam. Proin sagittis, nibh id hendrerit\n'
        + 'imperdiet, elit sapien laoreet elit.'

    private modalText: string = 'Far far away, behind the word mountains, far from the\n'
        + 'countries Vokalia and Consonantia, there live the blind texts\n'
        + 'Separated they live in Bookmarksgrove right at the coast of the\n'
        + 'Semantics, a large language ocean. A small river named Duden\n'
        + 'flows by their place and supplies it with the necessary\n'
        + 'regelialia'

    private Colors = Color;

    private ModalTypes = ModalType;

    private buttonColor = Color.PRIMARY;

    private alertColor = Color.PRIMARY;

    private badgeColor = Color.PRIMARY;

    private spinnerColor = Color.PRIMARY;

    private paginationColor = Color.PRIMARY;

    private breadcrumbColor = Color.PRIMARY;

    private modalColor = Color.PRIMARY;

    private modalType = ModalType.WITHOUT_SLOTS;

    private showModal = false;

    private showAlert = true;

    private formData: any = {
        ['test1_field']: '',
        ['test2_field']: '',
        ['test3_field']: '',
        ['test4_field']: '',
        ['test5_field']: '',
        ['test6_field']: [],
    };

    private testFormFields = [
        {
            name: 'test1_field',
            type: FieldType.STRING,
            label: 'String field',
            note: 'Some note for string field',
        },
        {
            name: 'test2_field',
            type: FieldType.NUMBER,
            label: 'Number field',
            note: 'Some note for number field',
        },
        {
            name: 'test3_field',
            type: FieldType.SELECT,
            label: 'Select field',
            note: 'Some note for select field',
            options: [
                {
                    label: 'Option 1',
                    value: 'option_1',
                },
                {
                    label: 'Option 2',
                    value: 'option_2',
                },
            ],
        },
        {
            name: 'test4_field',
            type: FieldType.COUNTRY,
            label: 'Country field',
            note: 'Some note for country field',
        },
        {
            name: 'test5_field',
            type: FieldType.RADIO,
            label: 'Radio field',
            note: 'Some note for radio field',
            options: [
                {
                    label: 'Option 1',
                    value: 'radio_1',
                },
                {
                    label: 'Option 2',
                    value: 'radio_2',
                },
            ],
            inline: true,
        },
        {
            name: 'test6_field',
            type: FieldType.CHECKBOX,
            label: 'Checkbox field',
            note: 'Some note for checkbox field',
            options: [
                {
                    label: 'Option 1',
                    value: 'checkbox_1',
                },
                {
                    label: 'Option 2',
                    value: 'checkbox_2',
                },
            ],
            inline: true,
        },
    ]

    /* Breadcrumb test */
    private items: object[] = [
        {
            title: 'Home',
            link: '#',
        },
        {
            title: 'Library',
            link: '#',
        },
        {
            title: 'Data',
            link: '#',
        },
    ];

    private capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    private deleteUnderscores(str: string): string {
        let modifiedString: string = str;

        modifiedString = this.capitalize(modifiedString);

        return modifiedString.replace('_', ' ');
    }

    private onFormInput(answer: any): void {
        this.formData[answer.field] = answer.value;
    }
}
</script>

<style scoped lang="sass">
@import "../styles/main.sass"
</style>
