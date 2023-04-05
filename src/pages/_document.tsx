import { ColorModeScript, type ThemeConfig } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "theme";

export default function Document() {
  const themeConfig = theme.config as ThemeConfig;
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
