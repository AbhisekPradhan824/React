import { useEffect, useState } from "react";

export function Flipkart() {
  const [products, setProducts] = useState([
    {
      title: "",
      price: 0,
      image: "",
      rating: { rate: 0, count: 0, reviews: 0 },
      features: [],
    },
  ]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
      .catch(() => {
        console.log("Error while fetching data");
      });
  }, []);
  return (
    <div className="container-fluid">
      {products.map((product) => (
        <div
          className="mt-4 row border border-1 border-dark-subtle"
          key={product.title}
        >
          <div className="col-4">
            <img
              src={product.image}
              alt={product.title}
              width="75%"
              height="75%"
            />
          </div>
          <div className="col-8">
            <div className="text-justify text-primary h3 mt-4">
              {product.title}
            </div>
            <div className="mt-3">
              <span className="badge bg-success">
                {product.rating.rate} <span className="bi bi-star-fill"></span>
              </span>{" "}
              <span className="fw-bold ms-3 text-secondary">
                {product.rating.count.toLocaleString()} Ratings &{" "}
                {product.rating.reviews} Reviews
              </span>
            </div>
            <div className="mt-3 h4">
              {product.price.toLocaleString("en-in", {
                style: "currency",
                currency: "INR",
              })}
            </div>
            <div className="mt-3">
              <ul className="list-unstyled">
                {product.features.map((feature) => (
                  <li>
                    <span className="bi bi-tag-fill text-success"></span>{" "}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
