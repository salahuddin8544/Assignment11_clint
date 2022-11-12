import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img  from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Login = () => {
  const {login} = useContext(AuthContext)
    const handleSubmit = event=>{
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
        event.preventDefault()
        login(email,password)
        .then(result=>{
          const user = result.user;
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
                <input name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className='btn btn-success' value="Submit" />
              </div>
            </form>
            <p className='text-center py-4'>New to Photography? <Link className='text-orange-700' to={'/signup'}>SignUp</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;