import { Link } from "react-router-dom";

export function ToDoLogin() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form className="w-25 bg-dark p-2 text-white rounded rounded-2">
        <h2 className="bi bi-person"> User Login</h2>
        <div className="mb-3">
          <label className="form-label fw-bold">User Id</label>
          <div>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <div>
            <input type="password" className="form-control" />
          </div>
        </div>
        <div className="mb-2">
          <button className="btn btn-warning w-100">Login</button>
        </div>
        <div>
          <Link to="register" className="btn btn-light w-100">
            New User Register
          </Link>
        </div>
      </form>
    </div>
  );
}
