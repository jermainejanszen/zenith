import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import colors from './colors';
import fonts from './fonts';
import styles from "./styles";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
}

const overrides = {
  config: themeConfig,
  colors,
  fonts,
  styles,
  components: {},
};

export default extendTheme(overrides);