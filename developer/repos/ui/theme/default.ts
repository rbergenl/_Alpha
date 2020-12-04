export type ThemeMode = 'light' | 'dark';
export type Variant =  'default' | 'primary' | 'success' | 'warning';
export type ITheme = typeof light; // auto fill the types based on the light mode
export type BaseTheme = Record<ThemeMode, ITheme>;

const VARIABLES = {
    web_font_family_sansSerif: '"Dosis", Helvetica, Arial, sans-serif',
    web_font_family_serif: 'Georgia, Times, "Times New Roman", serif',
    web_font_family_monoSpaced: '"Consolas", monaco, monospace',

    base_color_black: '#373A3C',
    base_color_white: '#E8F0F5',
    base_color_queenPink: '#e2c2c6',
    base_color_unbleachedSilk: '#ffe5d4',
    base_color_laurelGreen: '#bacdb0',
    base_color_darkSkyBlue: '#96bdc6',
    base_color_spanishCarmine: '#ca2e55',

    breakpoint_xs: '0',
    breakpoint_sm: '576px',
    breakpoint_md: '768px',
    breakpoint_lg: '992px',
    breakpoint_xl: '1200px',
    breakpoint_xxl: '1400px',

    button_padding_y_sm: '.25rem',
    button_padding_y_md: '.375rem',
    button_padding_y_lg: '.5rem',
    button_padding_x_sm: '.5rem',
    button_padding_x_md: '.75rem',
    button_padding_x_lg: '1rem',
    button_border_radius_sm: '3px',
    button_border_radius_md: '5px',
    button_border_radius_lg: '8px'
};

const light = {
    ...VARIABLES,
    brandPrimary: VARIABLES.base_color_darkSkyBlue,
    brandSecondary: VARIABLES.base_color_queenPink,
    brandAccent: VARIABLES.base_color_spanishCarmine,
    brandNeutral: VARIABLES.base_color_unbleachedSilk,
};

const dark = {
    ...VARIABLES,
    brandPrimary: VARIABLES.base_color_darkSkyBlue,
    brandSecondary: VARIABLES.base_color_queenPink,
    brandAccent: VARIABLES.base_color_spanishCarmine,
    brandNeutral: VARIABLES.base_color_unbleachedSilk,
}

export const defaultTheme: BaseTheme = {
    light,
    dark
}
