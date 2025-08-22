// types.ts

import { Theme } from "@/tokens/theme";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (themeName: string) => void;
  currentThemeName: string;
  availableThemes: { [key: string]: Theme };
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}