import React from 'react';
import logo from '../assets/image/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center p-2 space-y-2'>
            <div >
                <img src={logo} alt=""  />
            </div>
            <div className='space-y-3'>
                <h2 className='text-gray-400 font-poppins'>Journalism Withhout Fear or Favour</h2>
                <p>{moment().format("dddd, MMMM Do YYYY, ")}</p>
                 </div>
        </div>
    );
};

export default Header;