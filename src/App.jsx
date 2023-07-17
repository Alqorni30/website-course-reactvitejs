import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import Homepage from './pages/Homepage';
import Kelaspage from './pages/Kelaspage';

import Faqpage from './pages/Faqpage';
import SyaratKetenpage from './pages/SyaratKetenpage';
import Footercomponent from './components/Footercomponent';
import Testimonial from './pages/Testimonialpage';





function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path='/' Component={Homepage} />
      <Route path='/kelas' Component={Kelaspage} />
      <Route path='/testimonial' Component={Testimonial} />
      <Route path='/faq' Component={Faqpage} />
      <Route path='/syaratketen' Component={SyaratKetenpage} />
    </Routes>
    <Footercomponent/>
  </div>
}

export default App
