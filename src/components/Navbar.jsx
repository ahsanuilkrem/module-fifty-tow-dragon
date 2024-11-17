import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/image/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='nam space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login'>
              <div className='flex gap-2 items-center'>
              <img src={userIcon} alt="" srcset="" />
              {
                user && user?.email ? 
                ( <button onClick={logout} className='btn btn-neutral rounded-none'>LogOut</button> )
                 : 
                 (<Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>)
              }
              
              </div>

            </div>
            
        </div>
    );
};

export default Navbar;