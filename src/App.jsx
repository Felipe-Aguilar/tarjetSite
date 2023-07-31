import { Route, Routes} from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Login from './componentes/Login';

import TarjetSiteProd from './componentes/tarjet-prod/tarjetsite';
import BannerPrincipal from './componentes/tarjet-prod/BannerPrincipal';
import VistaSesion from './componentes/VistaSesion';
import AvisoPrivacidad from './componentes/AvisoPrivacidad';
import Perfilmxm from './componentes/tarjet-prod/Perfilmxm';
import HomeDirectorio from './componentes/directorio/HomeDirectorio';


const App = () => {

  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>


      <div style={{overflow: 'hidden'}}>
        <Routes>
          <Route path='/' element={<BannerPrincipal />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/:pageId' element={<VistaSesion />}/>   
          <Route path='/st/:pageId' element={<TarjetSiteProd />}/>
          <Route path='/st/bXhtdGFyamV0' element={<Perfilmxm />}/>
          <Route path='/aviso-privacidad' element={<AvisoPrivacidad />}/>
          <Route path='/directorio-tarjet' element={<HomeDirectorio />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;