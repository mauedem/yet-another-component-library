/* Enums */
export enum Color {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    INFO = 'info',
}

/*
* TODO реализовать размеры
* */
export enum Size {
    SMALL = 'small',
    DEFAULT = 'default',
    LARGE = 'large',
}

export enum ModalType {
    WITHOUT_SLOTS = 'without_slots',
    WITH_SLOTS = 'with_slots'
}

export enum FieldType {
    STRING = 'string',
    NUMBER = 'number',
    SELECT = 'select',
    ADDRESS = 'address',
    CHECKBOX = 'checkbox',
    DATE = 'date',
    MONEY = 'money',
    NESTED = 'nested',
    PHONE = 'phone',
    RADIO = 'radio',
}

/* Interfaces */
export interface SelectOption {
    label: string;
    value: string;
}

export interface FormField {
    name: string;
    type: string;
    label: string;
    note?: string;
    options: SelectOption;
}
