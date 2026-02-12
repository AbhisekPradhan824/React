import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Details() {
  let params = useParams();

  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
    rating: { rate: 0, count: 0 },
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => setProduct(response.data));
  }, []);
  return (
    <div>
      <h2>Details</h2>
      <dl>
        <dt>Title</dt>
        <dd>{product.title}</dd>
        <dt>Price</dt>
        <dd>{product.price}</dd>
        <dt>Description</dt>
        <dt>Preview</dt>
        <dd>
          <img
            src={product.image}
            alt={product.title}
            height="200"
            width="200"
          />
        </dd>
        <dt>Description</dt>
        <dd>{product.description}</dd>
        <dt>Rating</dt>
        <dd>
          {product.rating.rate}({product.rating.count})
        </dd>
      </dl>
      <p>
        <Link to={`/products/${product.category}`}>Go Back to Products</Link>
      </p>
    </div>
  );
}
