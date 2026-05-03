type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart" />
        <h4>Detalles y descripción del producto</h4>
        <p>
          Prenda de alta calidad elaborada con fibras naturales peruanas.{" "}
          <br />
          Confeccionada con algodón pima de exportación. Combina perfectamente
          con jeans, pantalones o shorts.
        </p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart" />
        <h4>Cuidado y mantenimiento</h4>
        <p>
          Lavar a máquina en ciclo delicado con agua fría.{" "}
          <br />
          No usar blanqueador. Secar en tendedero a la sombra para preservar
          los colores y la suavidad de la tela.
        </p>
      </div>
    </section>
  );
};

export default Description;
