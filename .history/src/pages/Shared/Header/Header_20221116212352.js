import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const signOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }
    const menuItem = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/blog'}>Blog</Link></li>
    </>
    console.log(user);

    return (
        <div className="navbar bg-blue-400 text-white h-20 mb-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
       user?.uid?<>
          <Link class="m-0 p-0" to={'/allreviews'}><button>My Review</button></Link>
        </>
        :
        <>
        </>
       }
        {menuItem}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="" className='w-10 rounded' />
        <h3 className='ml-2'><span className='text-amber-600'>SU</span> Photography</h3>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    {
       user?.uid?<>
          <Link class="m-0 p-0 items-center content-center" to={'/allreviews'}><button>My Review</button></Link>
        </>
        :
        <>
        </>
       }
    {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
{
  user?.uid?
   <>
      <button onClick={signOut} className="btn mr-2 btn-primary"><Link to={'/login'}>LogOut</Link></button>
  </>
  :
  <>
  <button className="btn mr-2 btn-primary"><Link to={'/login'}>Login</Link></button>
<button className='btn btn-success text-white'><Link to={'/register'}>Register</Link></button>
  </>
}
  </div>
</div>
    );
};

export default Header;