import { tokens } from "./tokens";

export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      success: string;
    };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
  typography: {
    fontSize: {
      base: string;
      lg: string;
    };
  };
}

// Seu tema original
export const defaultTheme = tokens

// Tema escuro alternativo (exemplo)
export const darkTheme = {
    colors: {
    primary: "#ffffff",
    secondary: "#a855f7",
    danger: "#f87171",
    success: "#4ade80",
  },
  spacing: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  typography: {
    fontSize: {
      base: "16px",
      lg: "20px",
    },
  },
};

// Tema claro alternativo (exemplo)
export const lightTheme: Theme = {
    colors: {
      primary: "#1e293b",
      secondary: "#7e22ce",
      danger: "#dc2626",
      success: "#16a34a",
    },
  spacing: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  typography: {
    fontSize: {
      base: "16px",
      lg: "20px",
    },
  },
};