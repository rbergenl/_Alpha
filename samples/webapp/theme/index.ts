import * as styledComponents from 'styled-components';
import { IBaseTheme, WEB_FONT_FACE, WEB_FONT_FAMILY } from '@<projectname>/ui/theme';
import themeLight from './light';
import themeDark from './dark';

export interface ITheme extends IBaseTheme {};

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
    ${WEB_FONT_FACE}
    html {
        ${WEB_FONT_FAMILY}
    }
`;

export default styled;
export { css, keyframes, ThemeProvider, GlobalStyle, themeLight, themeDark };
