import useSwr from "swr";
import { useRouter } from "next/router";

import type { ProductTypeList } from "@/types";

import ProductItem from "../../product-item";
import ProductsLoading from "./loading";

const ProductsContent = () => {
  const router = useRouter();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  
  // Construimos la query dinámicamente desde el router para que SWR detecte el cambio al instante
  const query = new URLSearchParams(router.query as any).toString();
  const { data, error } = useSwr(`/api/products${query ? `?${query}` : ""}`, fetcher);

  if (error) return <div>Error al cargar los productos</div>;
  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="products-list">
          {data.map((item: ProductTypeList) => (
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
