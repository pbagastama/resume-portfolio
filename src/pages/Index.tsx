import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <main>
        <Hero />
        <div id='about'>
          <About />
        </div>
        <div id='education'>
          <Education />
        </div>
        <div id='experience'>
          <Experience />
        </div>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
