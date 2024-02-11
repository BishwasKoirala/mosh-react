import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // callback function becaouse react will call it back
  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["clothing", "HouseHolds"]);
  }, [category]);
  // re renders if the given value i.e cvategory changes
  
// this will enter 無限ループ  
  // }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
