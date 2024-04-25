import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Service from './components/services/Services'
import Pricing from './components/pricing/Pricing'
import Blog from './components/blog/Blog'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
