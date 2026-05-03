import Link from "next/link";

import Layout from "../layouts/Main";

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <i className="icon-left" />
            Volver a la tienda
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">
            Crea una cuenta y descubre los beneficios
          </h2>
          <p className="form-block__description">
            Únete a Inka Moda y accede a descuentos exclusivos, un proceso de pago
            más rápido y seguimiento de todos tus pedidos.
          </p>

          <form className="form">
            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="Nombre"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="Apellido"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input className="form__input" placeholder="Correo electrónico" type="text" />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                type="Password"
                placeholder="Contraseña"
              />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label
                  htmlFor="check-signed-in"
                  className="checkbox checkbox--sm"
                >
                  <input
                    name="signed-in"
                    type="checkbox"
                    id="check-signed-in"
                  />
                  <span className="checkbox__check" />
                  <p>
                    Acepto los Términos de Servicio y la Política de Privacidad
                  </p>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--rounded btn--yellow btn-submit"
            >
              Registrarse
            </button>

            <p className="form__signup-link">
              <Link href="/login">¿Ya eres miembro?</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default RegisterPage;
