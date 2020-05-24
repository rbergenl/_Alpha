import React from 'react';
import * as styledComponents from 'styled-components';
import {
    IBaseTheme,
    themes,
    VARIANTS
} from '@<projectname>/ui/theme';
import { WEB_FONT_FAMILIES, BASE_COLORS } from '@<projectname>/ui/theme/dist/variables';
import '@<projectname>/ui/theme/dist/web-fonts.css';

const theme: ITheme = {
    ...themes.light
};

interface ITheme extends IBaseTheme {};

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
`;

const Themed = ({ children }: any) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
);

export default styled;
export { css, keyframes, Themed, VARIANTS, BASE_COLORS };
