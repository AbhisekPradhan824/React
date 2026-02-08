import React from "react";
import axios from "axios";

export class ClassEventDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      cartItems: [],
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
  }

  LoadCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        this.setState({ categories: response.data });
      });
  }

  LoadProducts(url) {
    axios
      .get(url)
      .then((response) => this.setState({ products: response.data }));
  }
  handleCategoryChange(e) {
    if (e.target.value === "all") {
      this.LoadProducts("https://fakestoreapi.com/products");
    } else {
      this.LoadProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`,
      );
    }
  }
  handleAddToCartClick(e) {
    alert(e.target.id);
    axios
      .get(`https://fakestoreapi.com/products/${e.target.id}`)
      .then((response) => this.state.cartItems.push(response.data));
  }

  componentDidMount() {
    this.LoadCategories();
    this.LoadProducts("https://fakestoreapi.com/products");
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="bg-dark h2 text-white p-3 text-center mt-2 rounded shadow">
          🛒 Shopper.
        </header>
        <div className="row mt-3">
          <nav className="col-2">
            <label className="fw-bold mb-1">Categories</label>
            <select
              className="form-select"
              onChange={this.handleCategoryChange}
            >
              {this.state.categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </nav>
          <main className="col-10 d-flex flex-wrap gap-3">
            {this.state.products.map((product) => (
              <div
                key={product.id}
                className="card shadow-sm"
                style={{ width: "220px" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top p-2"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-header bg-light">
                  <p
                    className="fw-bold mb-0 text-truncate"
                    title={product.title}
                  >
                    {product.title}
                  </p>
                </div>
                <div className="card-body">
                  <p
                    className="text-muted small"
                    style={{
                      height: "40px",
                      overflow: "hidden",
                    }}
                  >
                    {product.description}
                  </p>
                </div>
                <div className="card-footer bg-white text-center">
                  <dl className="mb-2">
                    <dt>Price</dt>
                    <dd className="text-success fw-bold">${product.price}</dd>
                    <dt>Rating</dt>
                    <dd>
                      ⭐ {product.rating.rate} ({product.rating.count})
                    </dd>
                  </dl>
                  <button
                    id={product.id}
                    className="bi bi-cart3 btn btn-warning w-100"
                    onClick={this.handleAddToCartClick}
                  >
                    {" "}
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    );
  }
}
