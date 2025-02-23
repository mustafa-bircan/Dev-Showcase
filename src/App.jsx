import { useTheme } from './context/ThemeContext';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} min-h-screen`}>
      <div className="flex flex-col ml-20 mr-30 mb-30">
        <Navbar />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <div className={`${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
