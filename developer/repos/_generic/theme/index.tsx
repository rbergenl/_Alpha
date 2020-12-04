import React from 'react';
import * as styledComponents from 'styled-components';
import {
    WEB_FONT_FAMILIES,
    BASE_COLORS,
    THEMES,
    IBaseTheme,
    VARIANTS
} from '@<projectname>>/ui';
// import '@<projectname>/ui/theme/dist/web-fonts.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ITheme extends IBaseTheme {}

const theme: ITheme = {
    ...THEMES.default.light
};

const {
    default: styled,
    createGlobalStyle,
    css,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
    ITheme
>;

const GlobalStyle = createGlobalStyle`
    html {
        font-family: ${WEB_FONT_FAMILIES.sansSerif}
    }
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100%;
    }
    #root {
        overflow-x: hidden;
        overflow-y: hidden;
    }
    img[src$=".svg"] {
        height: 100%;
    }
`;

const Themed = ({ children }: React.PropsWithChildren<unknown>): JSX.Element => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
);

export default styled;
export { css, keyframes, Themed, VARIANTS, BASE_COLORS };
