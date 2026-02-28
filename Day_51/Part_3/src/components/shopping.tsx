import axios from "axios";
import { useEffect, useState } from "react";
import { FakestoreProduct } from "../contracts/FakestoreProductContract";

export function Shopping() {
  const [categories, setCategories] = useState<string[]>([]);

  const [products, setProducts] = useState<FakestoreProduct[]>([]);

  function LoadCategories(): void {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }

  function LoadProducts(): void {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts();
  }, []);
  return (
    <div className="container-fluid">
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      <div>
        {products.map((product) => (
          <img src={product.image} width="100" height="100" className="m-2" />
        ))}
      </div>
    </div>
  );
}
