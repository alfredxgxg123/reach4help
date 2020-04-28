import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { THEME, Theme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, THEME };
export default styled;

const LARGE_BREAKPOINT = 1000;

export const SMALL_DEVICES = '@media only screen and (max-width: 600px)';
export const LARGE_DEVICES = `@media only screen and (min-width: ${LARGE_BREAKPOINT}px)`;
export const NON_LARGE_DEVICES = `@media only screen and (max-width: ${LARGE_BREAKPOINT -
  1}px)`;

export const CLS_SCREEN_LG_ONLY = 'screen-large-only';
export const CLS_SCREEN_LG_HIDE = 'screen-large-hide';
