import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

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
      <div style={{ display: "grid", gridTemplateColumns: "4fr 8fr" }}>
        <div>
          <h3>{params.category.toUpperCase()} - Products</h3>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`details/${product.id}`}
              style={{ width: "50px" }}
            >
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                height="50"
                width="50"
                style={{ margin: "20px", display: "block" }}
              />
            </Link>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <p>
        <Link to="/">Back to Categories</Link>
      </p>
    </div>
  );
}
