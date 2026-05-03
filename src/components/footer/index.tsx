import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>Inka</span> Moda
            </h6>
            <p>
              Inka Moda diseña prendas de alta calidad utilizando el mejor algodón 
              y fibras peruanas para el mundo. Moda sostenible y elegante.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#"><i className="icon-facebook" /></a>
              </li>
              <li>
                <a href="#"><i className="icon-instagram" /></a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Compras Online</li>
              <li><a href="#">Estado del pedido</a></li>
              <li><a href="#">Envío y Entrega</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">Opciones de pago</a></li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
            <ul>
              <li>Información</li>
              <li><a href="#">Tarjetas de Regalo</a></li>
              <li><a href="#">Buscar Tienda</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Hazte Miembro</a></li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li><a href="#">contacto@inkamoda.pe</a></li>
              <li><a href="#">Teléfono: +51 987 654 321</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
