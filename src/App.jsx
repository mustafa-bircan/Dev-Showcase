import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { theme } = useTheme();
  const { language } = useLanguage();


  return (
    <>
      <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} mt-5 ml-15 mr-30 mb-30`}>
        <Navbar />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
