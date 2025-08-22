
export const tokens = {
    colors: {
      primary: {
        value: "red",
        type: "color",
        category: "brand"
      },
      secondary: {
        value: "#9333ea",
        type: "color",
        category: "brand"
      },
      danger: {
        value: "#ef4444",
        type: "color",
        category: "feedback"
      },
      success: {
        value: "#22c55e",
        type: "color",
        category: "feedback"
      },
      neutral: {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      }
    },
    spacing: {
      sm: {
        value: "4px",
        type: "spacing",
        category: "spacing"
      },
      md: {
        value: "8px",
        type: "spacing",
        category: "spacing"
      },
      lg: {
        value: "16px",
        type: "spacing",
        category: "spacing"
      },
      xl: {
        value: "24px",
        type: "spacing",
        category: "spacing"
      },
    },
    typography: {
      fontFamily: {
        sans: {
          value: "Inter, system-ui, sans-serif",
          type: "fontFamily"
        },
        mono: {
          value: "Menlo, Monaco, Consolas, monospace",
          type: "fontFamily"
        }
      },
      fontSize: {
        base: {
          value: "16px",
          type: "fontSize",
          category: "typography"
        },
        lg: {
          value: "20px",
          type: "fontSize",
          category: "typography"
        },
        xl: {
          value: "24px",
          type: "fontSize",
          category: "typography"
        },
      },
      fontWeight: {
        normal: {
          value: "400",
          type: "fontWeight"
        },
        medium: {
          value: "500",
          type: "fontWeight"
        },
        bold: {
          value: "700",
          type: "fontWeight"
        }
      }
    },
    border: {
      width: {
        thin: {
          value: "1px",
          type: "borderWidth"
        },
        medium: {
          value: "2px",
          type: "borderWidth"
        },
        thick: {
          value: "4px",
          type: "borderWidth"
        }
      },
      radius: {
        sm: {
          value: "4px",
          type: "borderRadius"
        },
        md: {
          value: "8px",
          type: "borderRadius"
        },
        lg: {
          value: "12px",
          type: "borderRadius"
        },
        full: {
          value: "9999px",
          type: "borderRadius"
        }
      }
    },
    shadows: {
      sm: {
        value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        type  : "shadow"
      },
      md: {
        value: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        type: "shadow"
      },
      lg: {
        value: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        type: "shadow"
      }
    },
    breakpoints: {
      sm: {
        value: "640px",
        type: "breakpoint"
      },
      md: {
        value: "768px",
        type: "breakpoint"
      },
      lg: {
        value: "1024px",
        type: "breakpoint"
      },
      xl: {
        value: "1280px",
        type: "breakpoint"
      }
    },
    zIndex: {
      dropdown: {
        value: "1000",
        type: "zIndex"
      },
      modal: {
        value: "2000",
        type: "zIndex"
      },
      tooltip: {
        value: "3000",
        type: "zIndex"
      }
    }
}