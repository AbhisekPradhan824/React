import { useState } from "react";

export function InMemoryCURD() {
  const [products, setProducts] = useState([
    { id: 1, Name: "TV" },
    { id: 2, Name: "Mobile" },
  ]);

  const [newProduct, setNewProduct] = useState({ id: 0, Name: "" });

  const [itemLength, setItemLength] = useState(products.length);

  function handleIdChange(e) {
    setNewProduct({
      id: e.target.value,
      Name: newProduct.Name,
    });
  }

  function handleNameChange(e) {
    setNewProduct({
      Name: e.target.value,
      id: newProduct.id,
    });
  }
  function addItemClick() {
    products.push(newProduct);
    alert(`Total items are: ${products.length}`);
    setItemLength(products.length);
  }
  function deleteItemClick(e) {
    setProducts(products.filter((product) => product.id != e.target.name));
    alert(`Product deleted ${e.target.name}`);
  }

  return (
    <div className="container-fluid">
      <h2>Testing CRUD</h2>
      <div>
        <label className="fw-bold">Add New Product</label>
        <div className="w-25">
          <dl>
            <dt>Product Id</dt>
            <dd>
              <input
                type="number"
                className="form-control"
                onChange={handleIdChange}
              />
            </dd>
            <dt>Product Name</dt>
            <dd>
              <input
                type="text"
                className="form-control"
                onChange={handleNameChange}
              />
            </dd>
          </dl>
          <button className="btn btn-success" onClick={addItemClick}>
            {" "}
            Add Product
          </button>
        </div>
      </div>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.Name}</td>
              <td>
                <button className="btn btn-warning bi bi-pencil-square me-2 "></button>
                <button
                  className="btn btn-danger bi bi-trash-fill"
                  name={product.id}
                  onClick={deleteItemClick}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>{`Total items are : ${itemLength}`}</p>
    </div>
  );
}
