import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg text-textPrimary">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-textPrimary/60">
        <p>© {new Date().getFullYear()} Your Name. Built with passion ❤️</p>
      </footer>
    </div>
  );
}

export default App;