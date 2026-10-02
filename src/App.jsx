import { LanguageProvider } from './context/LanguageContext';
import { FilterProvider } from './context/FilterContext';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import About from './components/About';
import ExperienceProjects from './components/ExperienceProjects';
import Skills from './components/Skills';
import Education from './components/Education';
import SummerJobs from './components/SummerJobs';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundIcons from './components/BackgroundIcons';
import './index.css';

function AppContent() {
  return (
    <div className="app-container">
      <SkipLink />
      <Header />
      <main id="main-content" className="main-content" tabIndex="-1">
        <BackgroundIcons />
        <About />
        <ExperienceProjects />
        <Skills />
        <Education />
        <SummerJobs />
        <Interests />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <FilterProvider>
        <AppContent />
      </FilterProvider>
    </LanguageProvider>
  );
}

export default App;
