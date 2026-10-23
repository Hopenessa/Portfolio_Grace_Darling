import { theme } from "./theme";
import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
html { scrollbar-color: #edb448 #060606; scrollbar-width: auto; }
@supports selector(::-webkit-scrollbar) {
  html { scrollbar-color: auto; }
  ::-webkit-scrollbar { width: 12px; height: 12px; }
  ::-webkit-scrollbar-track { background: #060606; }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ffe39a 0%, #f2c44e 45%, #e78421 100%);
    border: 2px solid #060606;
    border-radius: 999px;
    min-height: 44px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #fff0b3 0%, #ffd34f 45%, #ef962f 100%);
  }
  ::-webkit-scrollbar-corner { background: #060606; }
}
h1 em, .signature, .brand span, .number {
  color: #f2c44e;
  background: ${theme.gradients.gold};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
body::before {
  content: ''; position: fixed; inset: 0; z-index: -1; pointer-events: none;
  background:
    radial-gradient(ellipse 50% 24% at 4% 20%, rgba(237,196,81,.11), transparent 72%),
    radial-gradient(ellipse 32% 55% at 103% 45%, rgba(237,196,81,.08), transparent 72%),
    radial-gradient(ellipse 60% 13% at 65% 95%, rgba(237,196,81,.07), transparent 75%);
  filter: blur(25px);
}
body { isolation: isolate; }
html { scroll-padding-top: 116px; }
section { scroll-margin-top: 16px; }
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:116px}body{margin:0;background:${theme.colors.background};color:${theme.colors.text};font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased}button,input,textarea{font:inherit}a{color:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a:focus-visible,button:focus-visible{outline:2px solid #e6c78b;outline-offset:6px}::selection{background:${theme.colors.gold};color:${theme.colors.background}}img{max-width:100%;display:block}h1,h2,h3,p{margin-top:0}h1,h2,h3{font-weight:400}h1,h2{font-family:Georgia,'Times New Roman',serif}p{line-height:1.7}section{scroll-margin-top:16px}.skip{position:fixed;top:-100px;left:16px;background:${theme.colors.text};color:${theme.colors.background};padding:14px;z-index:100}.skip:focus{top:12px}dialog{color:${theme.colors.text};background:#0c0c0c;border:1px solid ${theme.colors.gold};width:min(900px,92vw);max-height:90vh;padding:24px}dialog::backdrop{background:#000c}dialog img{max-height:65vh;object-fit:contain;margin:auto}dialog button{float:right;background:transparent;color:${theme.colors.text};border:1px solid #777;padding:8px 16px;margin-bottom:16px}dialog p{clear:both;margin:16px 0 0} @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}
`;
