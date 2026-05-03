import { useDispatch } from "react-redux";

import { removeProduct, setCount } from "@/store/reducers/cart";
import type { ProductStoreType } from "@/types";

const ShoppingCart = ({
  thumb,
  name,
  id,
  color,
  size,
  count,
  price,
}: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        thumb,
        name,
        id,
        color,
        size,
        count,
        price,
      }),
    );
  };

  const setProductCount = (count: number) => {
    if (count <= 0) {
      return;
    }

    const payload = {
      product: {
        thumb,
        name,
        id,
        color,
        size,
        count,
        price,
      },
      count,
    };

    dispatch(setCount(payload));
  };

  return (
    <tr>
      <td>
        <div className="cart-product" style={{ display: "flex", alignItems: "center" }}>
          <div 
            className="cart-product__img" 
            style={{ 
              width: "80px", 
              height: "80px", 
              borderRadius: "12px", 
              overflow: "hidden", 
              marginRight: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}
          >
            <img src={thumb} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <div className="cart-product__content">
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "4px" }}>{name}</h3>
            <p style={{ color: "#888", fontSize: "13px" }}>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">
        <span style={{ 
          backgroundColor: "#f5f5f5", 
          padding: "6px 12px", 
          borderRadius: "20px", 
          fontSize: "13px",
          color: "#555",
          fontWeight: "500"
        }}>
          {color || "Estándar"}
        </span>
      </td>
      <td className="cart-item-before" data-label="Talla">
        <span style={{ 
          backgroundColor: "#f5f5f5", 
          padding: "6px 12px", 
          borderRadius: "20px", 
          fontSize: "13px",
          color: "#555",
          fontWeight: "500"
        }}>
          {size || "Única"}
        </span>
      </td>
      <td>
        <div className="quantity-button">
          <button
            type="button"
            onClick={() => setProductCount(count - 1)}
            className="quantity-button__btn"
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            onClick={() => setProductCount(count + 1)}
            className="quantity-button__btn"
          >
            +
          </button>
        </div>
      </td>
      <td style={{ fontWeight: "600", fontSize: "16px" }}>S/{price}</td>
      <td className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removeFromCart()} />
      </td>
    </tr>
  );
};

export default ShoppingCart;
