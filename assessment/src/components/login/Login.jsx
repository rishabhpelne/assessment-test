import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="my-4">Login</h3>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: true })}
              />
              <div className="text-danger">
                {errors.email?.type == "required" && (
                  <label>This value is required</label>
                )}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              <div className="text-danger">
                {errors.password?.type == "required" && (
                  <label>This value is required</label>
                )}
              </div>
            </div>
            <div className="mt-3">
              <a
                href="#"
                className="btn btn-link text-dark text-decoration-none my-2"
              >
                <b>Forgot Password</b>
              </a>
              <input
                type="submit"
                className="btn btn-login w-100 py-3"
                value="Log in"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
