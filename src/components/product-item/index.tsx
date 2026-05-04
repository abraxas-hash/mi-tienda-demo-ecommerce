import { some } from "lodash";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";
import { toggleFavProduct } from "@/store/reducers/user";
import type { ProductTypeList } from "@/types";
import { BackgroundGradient } from "../ui/background-gradient";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
}: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(toggleFavProduct({ id }));
  };

  return (
    <div style={{ padding: "20px 10px" }}>
      <BackgroundGradient>
        {/* Image */}
        <div style={{ position: "relative", height: "280px", backgroundColor: "#f8f8f8" }}>
          <button
            type="button"
            onClick={toggleFav}
            className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            style={{ position: "absolute", top: "10px", right: "12px", zIndex: 10 }}
          >
            <i className="icon-heart" />
          </button>
          <Link href={`/product/${id}`} style={{ display: "block", height: "100%" }}>
            <img
              src={images ? images[0] : ""}
              alt="product"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {discount && (
              <span className="product__discount" style={{ position: "absolute", bottom: "10px", left: "10px", zIndex: 10 }}>
                {discount}%
              </span>
            )}
          </Link>
        </div>

        {/* Info */}
        <div style={{ padding: "16px", backgroundColor: "var(--card-bg, #fff)", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "600", margin: 0, color: "var(--text-color, #111)" }}>
            {name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "700", margin: 0, color: "var(--text-color, #111)" }}>
              S/{currentPrice}
            </h4>
            {discount && (
              <span style={{ fontSize: "0.8rem", textDecoration: "line-through", color: "#999" }}>
                S/{price}
              </span>
            )}
          </div>
          <Link href={`/product/${id}`}>
            <button
              style={{
                marginTop: "12px",
                width: "100%",
                padding: "10px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#111",
                color: "#fff",
                fontSize: "0.8rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
            >
              Ver Detalles
            </button>
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default ProductItem;
