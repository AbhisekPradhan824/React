export function DataBinding() {
  var Categories = ["Footware", "Electronics", "Clothings", "Sports"];
  return (
    <>
      <h2>Data Binding</h2>
      <nav className="bg-dark d-flex justify-content-between text-white">
        {Categories.map((category) => (
          <span key={category} className="me-4 p-3">
            {category}
          </span>
        ))}
      </nav>
      <div className="btn-group-vertical">
        {Categories.map((category) => (
          <button key={category} className="btn btn-danger mt-2 mb-2">
            {category}
          </button>
        ))}
      </div>
      <ol>
        {Categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      <select className="form-select w-25">
        {Categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <ul className="list-unstyled">
        {Categories.map((category) => (
          <li key={category}>
            <input type="checkbox" /> <span>{category}</span>
          </li>
        ))}
      </ul>
      <table className="table table-hover w-25 table-striped table-dark">
        <thead>
          <tr>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {Categories.map((category) => (
            <tr key={category}>
              <td>{category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
