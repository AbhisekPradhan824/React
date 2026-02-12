import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Products() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <div>
      <h3>{params.category.toUpperCase()} Products</h3>
      {products.map((product) => (
        <Link key={product.id} to={`/details/${product.id}`}>
          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            height="100"
            width="100"
            style={{ margin: "20px" }}
          />
        </Link>
      ))}
      <p>
        <Link to="/">Back to Categories</Link>
      </p>
    </div>
  );
}
