import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";

export default function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
