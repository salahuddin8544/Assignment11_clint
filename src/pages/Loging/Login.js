import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Login = () => {
  const {login,GoogleUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle=()=>{
    GoogleUser()
    .then(result=>{
      const user =result.user;
      navigate(from, { replace: true });
      console.log(user);
    })
    .catch(err=>console.log(err))
  }
    const handleSubmit = event=>{
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
        event.preventDefault()
        login(email,password)
        .then(result=>{
          const user = result.user;
          navigate(from, { replace: true });
          console.log(user);
        })
        .catch(error=> console.log(error))
    }
    return (
        <div className="hero my-4">
        <div className="hero-content flex-col">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className='btn btn-success' value="Submit" />
              </div>
            </form>
            <button onClick={handleGoogle} className='btn btn-dark mt-2'> <FaGoogle className='mr-2'></FaGoogle>  Login with Google</button>
            <p className='text-center py-4'>New to Photography? <Link className='text-orange-700' to={'/register'}>SignUp</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;