import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loginUser } from "../../Feature/Auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: null,
  });
  const { email, password, type } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate("/");
  };

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <p className="h2">Account Login</p>
        <div className="col-12 col-md-9">
          <form
            onSubmit={submitHandler}
            className=" d-flex flex-column my-4 gap-3"
          >
            <div className="">
              <label htmlFor="dropdown-type" className="my-2">
                Please select a type
              </label>
              <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-type">
                  {type ? type : "None"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() =>
                      setFormData({
                        ...formData,
                        type: "pool",
                      })
                    }
                  >
                    Pool
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      setFormData({
                        ...formData,
                        type: "participant",
                      })
                    }
                  >
                    Participants
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="w-100">
              <p>Email</p>
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="email or username"
                className="py-1 px-2 border w-100 w-100"
              />
            </div>
            <div className="w-100">
              <p>Password</p>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                className="py-1 px-2 border w-100"
              />
            </div>

            <input
              type="submit"
              name="login"
              value="Sign In"
              className="py-2 px-2 border my-2"
            />
          </form>
        </div>
        <div className="col-12 col-md-9 d-flex justify-content-center">
          <p>Or sign in with</p>
        </div>
        <div className="col-12 col-md-9 d-flex position-relative">
          <div className="col-6 d-flex justify-content-end">
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
      <div className="col-sm-12 col-md-6">
        <img src="/assets/login.svg" className="h-100 w-100" alt="" />
      </div>
    </div>
  );
}

export default Login;
