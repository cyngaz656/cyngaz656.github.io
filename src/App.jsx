import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Contact } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className="bg-experience-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Experience />
      </div>
      <Tech />
      <div className="bg-experience-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Works />
      </div>
      <Contact />
    </div>
    </BrowserRouter>
  )
}

export default App
