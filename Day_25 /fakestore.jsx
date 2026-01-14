import axios from "axios";
import { useEffect, useState } from "react";

export function FakeStore() {
  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: null,
      rating: { rate: 0, count: 0 },
    },
  ]);
  const [cartItems] = useState([]);
  const [countitem, setCountItems] = useState(0);
  const [toggleTable, setToggleTable] = useState({ display: "none" });

  function handleCategoryChange(e) {
    if (e.target.value === "all") {
      loadProducts("https://fakestoreapi.com/products");
    } else {
      loadProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }
  function loadProducts(url) {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }

  function loadCategory() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        setCategory(response.data);
      });
  }

  function handleAddClick(e) {
    axios
      .get(`https://fakestoreapi.com/products/${e.target.name}`)
      .then((response) => {
        cartItems.push(response.data);
        setCountItems(cartItems.length);
      });
  }

  function handleCartItemsClick() {
    setToggleTable({
      display: toggleTable.display === "none" ? "block" : "none",
    });
  }

  useEffect(() => {
    loadCategory();
    loadProducts("https://fakestoreapi.com/products");
  }, []);
  return (
    <div className="container-fluid">
      <header className="bg-dark d-flex justify-content-between text-light align-items-center p-3">
        <div className="h2">
          <span>FakeStore.</span>
        </div>
        <div>
          <span className="me-4">Home</span>
          <span className="me-4">Jewllery</span>
          <span className="me-4">Electronics</span>
        </div>
        <div>
          <button
            className="btn btn-secondary position-relative bi bi-cart3"
            onClick={handleCartItemsClick}
          >
            <span className="badge rounded rounded-circle bg-danger position-absolute">
              {countitem}
            </span>
          </button>
        </div>
      </header>
      <section className="row mt-3">
        <nav className="col-2">
          <div className="mt-4">
            <label className="fw-bold form-label">Select Category</label>
            <select className="form-select" onChange={handleCategoryChange}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div style={toggleTable} className="mt-4">
            <table className="table table-hover caption-top table-striped">
              <caption>Your Cart Items</caption>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        height="50"
                        width="50"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </nav>
        <main
          className="col-10 d-flex text-dark flex-wrap overflow-auto justify-content-center"
          style={{ height: "600px" }}
        >
          {products.map((product) => (
            <div
              className="card p-2 m-2"
              key={product.id}
              style={{ width: "200px" }}
            >
              <img
                src={product.image}
                className="card-img-top"
                height="120"
                alt=""
              />
              <div className="card-header" style={{}}>
                <p>{product.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>{product.price}</dd>
                  <dt>Rating</dt>
                  <dd>
                    {product.rating.rate}{" "}
                    <span className="bi bi-star-fill text-success"></span>
                  </dd>
                  <dt>Reviews</dt>
                  <dd>{product.rating.count}</dd>
                </dl>
              </div>
              <div className="card-footer">
                <button
                  name={product.id}
                  className="btn btn-warning w-100 bi bi-cart4"
                  onClick={handleAddClick}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}
