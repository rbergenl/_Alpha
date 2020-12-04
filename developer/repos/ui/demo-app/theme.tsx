import { DefaultTheme } from 'styled-components/native';
import {
    ThemeMode,
    ITheme,
    defaultTheme
} from '@aardonyx/ui/app';

declare module 'styled-components/native' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ITheme {
        brandExtra: string;
    }
}

const light: DefaultTheme = {
    ...defaultTheme.light,
    brandExtra: defaultTheme.light.base_color_black
}

const dark: DefaultTheme = {
    ...defaultTheme.dark,
    brandExtra: 'green'
}

export const getTheme = (opts: { mode: ThemeMode }): DefaultTheme  => {
    if (opts.mode === 'dark') {
        return dark;
    }
    return light;
}