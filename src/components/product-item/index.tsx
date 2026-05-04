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
    dispatch(
      toggleFavProduct({
        id,
      }),
    );
  };

  return (
    <div className="product-item-wrapper">
      <BackgroundGradient className="h-full">
        <div className="product-item-gradient">
          <div className="product__image">
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            >
              <i className="icon-heart" />
            </button>

            <Link href={`/product/${id}`}>
              <img src={images ? images[0] : ""} alt="product" />
              {discount && <span className="product__discount">{discount}%</span>}
            </Link>
          </div>
          
          <div className="product__description">
            <h3 className="text-black dark-text-neutral-200 line-clamp-2">{name}</h3>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-black dark-text-white">S/{currentPrice}</h4>
                {discount && <span className="text-sm line-through text-neutral-500">S/{price}</span>}
              </div>
              
              <Link href={`/product/${id}`}>
                <button className="rounded-full w-full py-2 mt-4 text-xs font-bold transition">
                  Ver Detalles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default ProductItem;
