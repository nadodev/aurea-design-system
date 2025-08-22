export interface RootObject {
  version: string;
  name: string;
  tokens: Tokens;
}
export interface Tokens {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  border: Border;
  shadows: Shadows;
  breakpoints: Breakpoints;
  zIndex: ZIndex;
}
export interface ZIndex {
  dropdown: Sm;
  modal: Sm;
  tooltip: Sm;
}
export interface Breakpoints {
  sm: Sm;
  md: Sm;
  lg: Sm;
  xl: Sm;
}
export interface Shadows {
  sm: Sm;
  md: Sm;
  lg: Sm;
}
export interface Border {
  width: Width;
  radius: Radius;
}
interface Radius {
  sm: Sm;
  md: Sm;
  lg: Sm;
  full: Sm;
}
interface Width {
  thin: Sm;
  medium: Sm;
  thick: Sm;
}
interface Typography {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
}
interface FontWeight {
  normal: Sm;
  medium: Sm;
  bold: Sm;
}
interface FontSize {
  base: Sm;
  lg: Sm;
  xl: Sm;
  '2xl': Sm;
}
interface FontFamily {
  sans: Sm;
  mono: Sm;
}
interface Spacing {
  sm: Sm;
  md: Sm;
  lg: Sm;
  xl: Sm;
  '2xl': Sm;
}
interface Sm {
  value: string;
  type: string;
}
interface Colors {
  primary: Primary;
  secondary: Primary;
  danger: Primary;
  success: Primary;
  neutral: Neutral;
}
interface Neutral {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}
interface Primary {
  value: string;
  type: string;
  category: string;
}