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
import HomeFormulario from './componentes/formulario/HomeFormulario';
import Perfil from './componentes/formulario/Perfil';
import DiseñaTarjet from './componentes/formulario/DiseñaTarjet';
import DiseñaTarjetSite from './componentes/formulario/DiseñaTarjetSite';
import LoginPartners from './componentes/formulario/partners/LoginPartners';
import PerfilPartners from './componentes/formulario/partners/PerfilPartners';
import RegistroPartner from './componentes/formulario/partners/RegistroPartner';
import LoginEmpresas from './componentes/formulario/empresas/LoginEmpresas';


const App = () => {

  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>


      {/* <div style={{overflow: 'hidden'}}> */}
      <>
        <Routes>
          <Route path='/' element={<BannerPrincipal />}/>
          <Route path='/login-tarjet' element={<Login />}/>
          <Route path='/:pageId' element={<VistaSesion />}/>   
          <Route path='/st/:pageId' element={<TarjetSiteProd />}/>
          <Route path='/st/bXhtdGFyamV0' element={<Perfilmxm />}/>
          <Route path='/aviso-privacidad' element={<AvisoPrivacidad />}/>
          <Route path='/directorio-tarjet' element={<HomeDirectorio />} />

          <Route path='/login' element={<HomeFormulario />} />
          <Route path='/mi-perfil/:usuId' element={<Perfil />} />
          <Route path='/disena-tu-tarjet/:usuId' element={<DiseñaTarjet/>} />
          <Route path='/disena-tu-tarjetsite/:usuId' element={<DiseñaTarjetSite />} />

          <Route path='/login-partners' element={<LoginPartners />} />
          <Route path='/perfil-partner/:partnerId' element={<PerfilPartners />} />
          <Route path='/alta-usuarios' element={<RegistroPartner />} />

          <Route path='/empresas' element={<LoginEmpresas />} />
        </Routes>

        <Footer />
      </>
    </>
  );
}

export default App;