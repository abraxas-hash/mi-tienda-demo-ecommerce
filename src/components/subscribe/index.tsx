const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div
          style={{ backgroundImage: "url(/images/subscribe.jpg)" }}
          className="subscribe__content"
        >
          <h4>
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas cada semana
          </h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit" className="btn btn--rounded btn--yellow">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
