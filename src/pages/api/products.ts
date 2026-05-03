import type { NextApiRequest, NextApiResponse } from "next";

// fake data
import products from "../../utils/data/products";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { category, size, color } = req.query;
  
  let filteredProducts = products;
  
  if (category) {
    const cats = (category as string).toLowerCase().split(",");
    filteredProducts = filteredProducts.filter((p) => cats.includes(p.category.toLowerCase()));
  }
  
  if (size) {
    const sizes = (size as string).toLowerCase().split(",");
    filteredProducts = filteredProducts.filter((p) => p.sizes.some(s => sizes.includes(s.toLowerCase())));
  }
  
  if (color) {
    const colors = (color as string).split(",");
    filteredProducts = filteredProducts.filter((p) => p.colors.some(c => colors.includes(c)));
  }

  // fake loading time
  setTimeout(() => {
    res.status(200).json(filteredProducts);
  }, 500);
};
