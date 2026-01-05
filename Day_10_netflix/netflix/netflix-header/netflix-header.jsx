import "./netflix-header.css";

export function NetflixHeader() {
  return (
    <header className="d-flex p-4 justify-content-between text-white">
      <div>
        <span className="brand-title">NETFLIX</span>
      </div>
      <div className="d-flex">
        <div className="input-group">
          <span className="input-group-text bi bi-translate"></span>
          <select className="form-select">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <button className="btn btn-danger ms-2">Signup</button>
      </div>
    </header>
  );
}
