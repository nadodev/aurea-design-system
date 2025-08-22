import { tokens } from "@/tokens/tokens";

export function getThemeVariables(theme = tokens) {
  return {
    '--color-primary': theme.colors.primary?.value || theme.colors.primary,
    '--color-secondary': theme.colors.secondary?.value || theme.colors.secondary,
    '--color-danger': theme.colors.danger?.value || theme.colors.danger,
    '--color-success': theme.colors.success?.value || theme.colors.success,
    '--spacing-sm': theme.spacing.sm?.value || theme.spacing.sm,
    '--spacing-md': theme.spacing.md?.value || theme.spacing.md,
    '--spacing-lg': theme.spacing.lg?.value || theme.spacing.lg,
    // Adicione outras variáveis conforme necessário
  } as React.CSSProperties;
}