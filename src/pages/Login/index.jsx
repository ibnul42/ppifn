import React from "react";

function Login() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <p className="h2">Account Login</p>
        <div className="col-12 col-md-9">
          <form action="" className=" d-flex flex-column my-4 gap-3">
            <input
              type="text"
              placeholder="email or username"
              className="py-1 px-2 border"
            />
            <input type="password" className="py-1 px-2 border" />
            <input
              type="submit"
              name="login"
              value="Sign In"
              className="py-1 px-2 border"
            />
          </form>
        </div>
        <div className="col-12 col-md-9 d-flex justify-content-center">
          <p>Or sign in with</p>
        </div>
        <div className="col-12 col-md-9 d-flex ">
          <div className="col-6 d-flex justify-content-start">
            <input
              type="button"
              name="google"
              value="Google"
              className="py-1 px-2 border w-75"
            />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <input
              type="button"
              name="facebook"
              value="Facebook"
              className="py-1 px-2 border w-75"
            />
          </div>
        </div>
        <div className="col-12 col-md-9 my-3">
          <p>
            Don't have an account?
            <span className="text-warning px-2 text" role="button">
              Register here
            </span>
          </p>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">'dxm</div>
    </div>
  );
}

export default Login;
