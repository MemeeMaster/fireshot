import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      black: string;
      white: string;
      gray: string;
    };
  }

  interface ThemeOptions {
    custom: {
      black: React.CSSProperties["color"];
      white: React.CSSProperties["color"];
      gray: React.CSSProperties["color"];
    };
  }
}
