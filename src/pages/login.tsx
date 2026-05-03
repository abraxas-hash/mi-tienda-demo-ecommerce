import Link from "next/link";
import { useForm } from "react-hook-form";

import Layout from "../layouts/Main";
import { server } from "../utils/server";
import { postData } from "../utils/services";

type LoginMail = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: LoginMail) => {
    await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });
  };

  return (
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
            <h2 className="form-block__title">Iniciar sesión</h2>
            <p className="form-block__description">
              Accede a tu cuenta para ver tus pedidos, gestionar tus datos
              y disfrutar de ofertas exclusivas para miembros.
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Correo electrónico"
                  type="text"
                  name="email"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    Este campo es obligatorio
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">
                    Por favor escribe un correo válido
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Este campo es obligatorio
                  </p>
                )}
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className="checkbox checkbox--sm"
                  >
                    <input
                      type="checkbox"
                      name="keepSigned"
                      id="check-signed-in"
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check" />
                    <p>Mantener sesión iniciada</p>
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="form__info__forgot-password"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn">
                  <i className="icon-facebook" />
                  Facebook
                </button>
                <button type="button" className="btn-social google-btn">
                  <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
                </button>
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Ingresar
              </button>

              <p className="form__signup-link">
                ¿Aún no tienes cuenta? <Link href="/register">Regístrate</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
