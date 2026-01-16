import { useState } from "react";

export function InMemoryCURD() {
  const [products, setProducts] = useState([
    { id: 1, Name: "TV" },
    { id: 2, Name: "Mobile" },
  ]);

  const [newProduct, setNewProduct] = useState({ id: 0, Name: "" });
  const [activeProductId, setActiveProductId] = useState(0);
  const [newName, setNewName] = useState("");

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
    setProducts([...products]);
    setNewProduct({ id: 0, Name: "" });
  }
  function deleteItemClick(index) {
    var flag = window.confirm("are you sure \nWant to Delete?");
    if (flag) {
      products.splice(index, 1);
      setProducts([...products]);
    }
  }
  function handleEditClick(id) {
    setActiveProductId(id);
    var prod = products.find((product) => product.id === id);
    setNewName(prod.Name);
  }
  function handleSaveClick(id) {
    var editableProduct = products.find((product) => product.id === id);
    editableProduct.Name = newName;
    setProducts([...products]);
    setActiveProductId(0);
  }
  function handleNameChangeOnEdit(e) {
    setNewName(e.target.value);
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
                value={newProduct.id}
                min="1"
                onChange={handleIdChange}
              />
            </dd>
            <dt>Product Name</dt>
            <dd>
              <input
                type="text"
                className="form-control"
                onChange={handleNameChange}
                value={newProduct.Name}
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
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                {activeProductId === product.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={handleNameChangeOnEdit}
                  />
                ) : (
                  <label>{product.Name}</label>
                )}
              </td>
              <td>
                {product.id === activeProductId ? (
                  <button
                    className="btn btn-success bi bi-floppy me-2"
                    onClick={() => handleSaveClick(product.id)}
                  ></button>
                ) : (
                  <button
                    className="btn btn-warning bi bi-pencil-square me-2 "
                    onClick={() => handleEditClick(product.id)}
                  ></button>
                )}
                <button
                  className="btn btn-danger bi bi-trash-fill"
                  onClick={() => deleteItemClick(index)}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
