import { ThemeProvider } from "styled-components";
import theme from "./contants/theme";

export default function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
