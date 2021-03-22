import React from "react";
import { Link } from "react-router-dom";

import { FooterContainer } from "./styles";

// Componente principal
const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-block-one">
        <div className="footer-menu">
          <p className="menu-title">Accesos</p>
          <Link to="/">Buscador de cursos</Link>
          <Link to="/">Destinos más buscados</Link>
          <Link to="/">Cómo aplicar a la universidad</Link>
        </div>
        <div className="footer-menu">
          <p className="menu-title">Acerca</p>
          <Link to="/">Quienes somos</Link>
          <Link to="/">Nuestros partners</Link>
          <Link to="/">Incluye tu universidad</Link>
        </div>
        <div className="footer-menu">
          <p className="menu-title">Legal</p>
          <Link to="/">Términos de Uso</Link>
          <Link to="/">Términos y condiciones</Link>
          <Link to="/">Políticas de privacidad</Link>
        </div>
        <div className="footer-menu">
          <p className="social-title">Formas de contacto</p>
          <div className="footer-social-icons">
            <Link to="/">
              <img src="/images/twitter.png" />
            </Link>
            <Link to="/">
              <img src="/images/instagram.png" />
            </Link>
            <Link to="/">
              <img src="/images/facebook.png" />
            </Link>
            <Link to="/">
              <img src="/images/whatsapp.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-block-two">
        <div className="container-logo">
          <img src="/images/logo.png" />
          <p className="text-copyright">© Be International | 2010-2020</p>
        </div>
        <img className="image-footer" src="/images/footer.png" />
      </div>
    </FooterContainer>
  );
};
export default Footer;
