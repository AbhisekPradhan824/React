import { useEffect, useState } from "react";

export function Flipkart() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    rating: { rate: 0, count: 0, reviews: 0 },
    features: [],
  });
  useEffect(() => {
    var http = new XMLHttpRequest();
    http.open("get", "product.json", true);
    http.send();
    http.onreadystatechange = () => {
      if (http.readyState === 4) {
        setProduct(JSON.parse(http.responseText));
      }
    };
  });
  return (
    <div className="container-fluid">
      <div className="mt-4 row">
        <div className="col-4 text-center">
          <img src={product.image} alt="" />
        </div>
        <div className="col-8">
          <div>
            <span className="h3 text-primary">{product.title}</span>
          </div>
          <div className="mt-1">
            <span className="badge bg-success text-white fw-bold me-3">
              {product.rating.rate}
              <span className="bi bi-star-fill ps-1"></span>
            </span>
            <span className="text-secondary fw-bold">
              {product.rating.count} Ratings & {product.rating.reviews} Reviews
            </span>
          </div>
          <div className="mt-2">
            <span className="bi bi-currency-rupee fw-bolder h2">
              {product.price}
            </span>
          </div>
          <div className="mt-2">
            <h3>Avliable offers</h3>
            <ul className="list-unstyled">
              {product.features.map((feature) => (
                <li key={feature}>
                  <span className="bi bi-tag-fill text-success"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
