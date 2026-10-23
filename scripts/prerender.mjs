import { build } from "vite";
import { readFile, writeFile } from "node:fs/promises";
await build({
  configLoader: "native",
  build: {
    ssr: "src/entry-server.tsx",
    outDir: ".prerender",
    emptyOutDir: true,
  },
});
const { render } = await import("../.prerender/entry-server.js");
const { html, styles } = render();
const page = await readFile("dist/index.html", "utf8");
await writeFile(
  "dist/index.html",
  page
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace("</head>", `${styles}</head>`),
);
console.log("Static HTML and styles generated.");
