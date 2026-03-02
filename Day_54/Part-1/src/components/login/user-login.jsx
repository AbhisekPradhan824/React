import { useCaptcha } from "../../hooks/captcha";
import { useApi } from "../../hooks/getapi";

export function UserLogin() {
  const captcha = useCaptcha();
  const categories = useApi("https://fakestoreapi.com/products/categories");
  return (
    <div className="container-fluid">
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      <h3>User Login</h3>
      <dl>
        <dt>UserId</dt>
        <dd>
          <input type="text" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" name="Password" />
        </dd>
        <dt>Verify Code</dt>
        <dd>{captcha}</dd>
      </dl>
      <button>Login</button>
    </div>
  );
}
