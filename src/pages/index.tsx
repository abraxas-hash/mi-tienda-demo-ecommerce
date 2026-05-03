import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import ProductsFeatured from "@/components/products-featured";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>¡Nuevas colecciones disponibles!</h3>
              <a href="#" className="btn btn--rounded">
                Ver Colección
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Polos de algodón pima desde S/ 89.90</h3>
              <a href="#" className="btn btn--rounded">
                Ver detalles
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Ofertas de temporada</h3>
              <a href="#" className="btn btn--rounded">
                VER TODO
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>¿Por qué elegirnos?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping" />
              <div className="data-item__content">
                <h4>Envío Gratis</h4>
                <p>
                  Todas las compras mayores a S/ 200 tienen envío gratuito
                  a cualquier parte del Perú.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment" />
              <div className="data-item__content">
                <h4>Pagos Seguros</h4>
                <p>
                  Aceptamos Yape, Plin, tarjetas de crédito y débito a través
                  de una pasarela de pago segura.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash" />
              <div className="data-item__content">
                <h4>Garantía de Devolución</h4>
                <p>
                  Si el producto llegó dañado o no te convenció, tienes
                  15 días para solicitar el cambio o reembolso.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials" />
              <div className="data-item__content">
                <h4>Calidad Premium</h4>
                <p>
                  Cada prenda está confeccionada con algodón pima y fibra
                  de alpaca 100% peruanos, de exportación mundial.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
