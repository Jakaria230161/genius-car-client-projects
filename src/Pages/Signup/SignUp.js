import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/signup/signup2.webp';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        form.reset();
      })
    .catch(err => console.error(err))
  };


  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 rounded-lg">
          <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                name='name'
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="text"
                name='email'
                placeholder="Enter Your Email Address"
                className="input input-bordered"

              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                name='password'
                placeholder="Enter Your Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              ></input>
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;