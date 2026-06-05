import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#9c27b0" },
    secondary: { main: "#ff9800" },
    background: {
      default: "#1e1e1e",
      paper: "#252526",
    },
  },
  typography: {
    fontSize: 13,
    fontFamily: '"Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: { size: "small" },
      styleOverrides: { root: { textTransform: "none", borderRadius: 20 } },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none", borderBottom: "1px solid #e0e0e0" },
      },
    },
    MuiToolbar: {
      styleOverrides: { dense: { minHeight: 48 } },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
  },
});
