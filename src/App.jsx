import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ExperienceProjects from './components/ExperienceProjects';
import Skills from './components/Skills';
import Education from './components/Education';
import SummerJobs from './components/SummerJobs';
import Interests from './components/Interests';
import Contact from './components/Contact';
import BackgroundIcons from './components/BackgroundIcons';
import './index.css';

function App() {
  const [lang, setLang] = useState('fr');

  return (
    <div className="app-container">
      <Header lang={lang} setLang={setLang} />
      <main className="main-content">
        <BackgroundIcons />
        <About lang={lang} />
        <ExperienceProjects lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <SummerJobs lang={lang} />
        <Interests lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}

export default App;
