import Link from "next/link";
import { useForm } from "react-hook-form";

import Layout from "../layouts/Main";
import { server } from "../utils/server";
import { postData } from "../utils/services";

type ForgotMail = {
  email: string;
};

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: ForgotMail) => {
    await postData(`${server}/api/login`, {
      email: data.email,
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
            <h2 className="form-block__title">¿Olvidaste tu contraseña?</h2>
            <p className="form-block__description">
              Ingresa tu correo electrónico y recupera tu cuenta
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

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Restablecer contraseña
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
