import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkGallery } from "./components/WorkGallery";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GoTopButton } from "./components/GoTopButton";
import { useSectionNavigation } from "./hooks/useSectionNavigation";
export default function App() {
  useSectionNavigation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <WorkGallery />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <GoTopButton />
    </ThemeProvider>
  );
}
