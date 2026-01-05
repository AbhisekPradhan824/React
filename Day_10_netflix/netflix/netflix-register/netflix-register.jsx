export function NetflixRegister() {
  return (
    <form className="mt-4">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="input-group input-group-lg">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
        />
        <button className=" btn btn-danger ms-3">
          <span className="bi bi-chevron-right"></span>Get Started
        </button>
      </div>
    </form>
  );
}
