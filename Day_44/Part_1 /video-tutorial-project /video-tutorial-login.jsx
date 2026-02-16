import { Link } from "react-router-dom";
export function TutorialLogin() {
  return (
    <div>
      <form className="w-25">
        <h3>User Login</h3>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input type="text" className="form-control" name="UserId" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" className="form-control" />
          </dd>
        </dl>
        <button className="btn btn-primary">Login</button>
      </form>
      <p>
        <Link to="/register">New User Register</Link>
      </p>
    </div>
  );
}
