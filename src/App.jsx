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

  const greeting = language === 'en' ? 'Welcome to my portfolio!' : 'Portföyüme hoş geldiniz!';

  return (
    <div className={`min-h-screen pl-[20px] pr-[40px] pt-[10px] pb-[40px] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
