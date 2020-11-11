import { BASE_COLORS, BRAND_COLORS } from './variables';

export const light: IBaseTheme = {
    background: {
        default: BRAND_COLORS.neutral
    },
    text: {
        default: BASE_COLORS.black
    },
    button: {
        default: BRAND_COLORS.neutral,
        primary: BRAND_COLORS.accent
    }
};

export const dark: IBaseTheme = {
    background: {
        default: BASE_COLORS.black
    },
    text: {
        default: BASE_COLORS.white
    },
    button: {
        default: BRAND_COLORS.accent,
        primary: BRAND_COLORS.neutral
    }
};

export const themes = { light, dark };

export interface IBaseTheme {
    background: Variants;
    text: Variants;
    button: Variants;
}

export enum VARIANTS {
    default = 'default',
    primary = 'primary',
    success = 'success',
    warning = 'warning'
}

export interface Variants {
    [VARIANTS.default]: string;
    [VARIANTS.primary]?: string;
    [VARIANTS.success]?: string;
    [VARIANTS.warning]?: string;
}
