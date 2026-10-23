import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "./App";
export function render() {
  const sheet = new ServerStyleSheet();
  try {
    return {
      html: renderToString(sheet.collectStyles(<App />)),
      styles: sheet.getStyleTags(),
    };
  } finally {
    sheet.seal();
  }
}
