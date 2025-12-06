import Hero from './components/Hero';
import Showcase from './components/Showcase';
import WhyMe from './components/WhyMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Showcase />
      <WhyMe />
      <Footer />
    </div>
  );
}

export default App;
