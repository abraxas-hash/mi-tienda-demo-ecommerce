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
      <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900 h-full flex flex-col">
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
              <img src={images ? images[0] : ""} alt="product" className="object-contain rounded-xl" />
              {discount && <span className="product__discount">{discount}%</span>}
            </Link>
          </div>
          
          <div className="product__description mt-4 flex flex-col flex-grow">
            <h3 className="text-base sm:text-lg font-bold text-black dark:text-neutral-200 line-clamp-2" style={{minHeight: '3em'}}>{name}</h3>
            <div
              className={`product__price ${discount ? "product__price--discount" : ""} mt-auto flex items-center justify-between pt-4`}
            >
              <div>
                <h4 className="text-xl font-bold text-black dark:text-white">S/{currentPrice}</h4>
                {discount && <span className="text-sm line-through text-neutral-500">S/{price}</span>}
              </div>
            </div>
            
            <Link href={`/product/${id}`}>
              <button className="rounded-full w-full py-2 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800 transition hover:opacity-80">
                Ver Detalles
              </button>
            </Link>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default ProductItem;
