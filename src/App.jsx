import TelemetryBar from './components/TelemetryBar.jsx';
import SectionRail from './components/SectionRail.jsx';
import Hero from './components/Hero.jsx';
import Ferronyx from './components/Ferronyx.jsx';
import Sora from './components/Sora.jsx';
import Thesis from './components/Thesis.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen">
      <TelemetryBar theme={theme} onToggle={toggle} />
      <SectionRail />
      <main className="relative z-[3]">
        <Hero />
        <Ferronyx />
        <Sora />
        <Thesis />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
