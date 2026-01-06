import { useState } from "react";

export function DataBinding() {
  const [Product, setProduct] = useState({
    Name: "TV",
    Price: 0,
    City: "Select City",
    Stock: false,
  });

  function NameChange(e) {
    setProduct({
      Name: e.target.value,
      Price: Product.Price,
      City: Product.City,
      Stock: Product.Stock,
    });
  }

  function PriceChange(e) {
    setProduct({
      Name: Product.Name,
      Price: e.target.value,
      City: Product.City,
      Stock: Product.Stock,
    });
  }

  function CityChange(e) {
    setProduct({
      City: e.target.value,
      Name: Product.Name,
      Price: Product.Price,
      Stock: Product.Stock,
    });
  }

  function StockChange(e) {
    setProduct({
      Name: Product.Name,
      Price: Product.Price,
      Stock: e.target.checked,
      City: Product.City,
    });
  }

  return (
    <>
      <div className="container-fluid">
        <h2>Product Details</h2>
        <section className="row">
          <nav className="col-4">
            <dl>
              <dt>Name</dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  value={Product.Name}
                  onChange={NameChange}
                />
              </dd>
              <dt>Price</dt>
              <dd>
                <input
                  type="number"
                  className="form-control"
                  value={Product.Price}
                  onChange={PriceChange}
                />
              </dd>
              <dt>City</dt>
              <dd>
                <select
                  className="form-select"
                  value={Product.City}
                  onChange={CityChange}
                >
                  <option>Select City</option>
                  <option>Hyd</option>
                  <option>Delhi</option>
                </select>
              </dd>
              <dt>Stock</dt>
              <dd className="form-switch">
                <input
                  type="checkbox"
                  checked={Product.Stock}
                  className="form-check-input"
                  onChange={StockChange}
                />
                <span className="form-check-label">Avaliable</span>
              </dd>
            </dl>
          </nav>
          <main className="col-8">
            <dl>
              <dt>Name</dt>
              <dd>{Product.Name}</dd>
              <dt>Price</dt>
              <dd>{Product.Price}</dd>
              <dt>Stock</dt>
              <dd>{Product.Stock === true ? "Avaliable" : "Out of Stock"}</dd>
              <dt>City</dt>
              <dd>{Product.City}</dd>
            </dl>
          </main>
        </section>
      </div>
    </>
  );
}
