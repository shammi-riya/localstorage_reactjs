import React from 'react';

const Header = () => {
    return (
 <div className='bg-blue-100'>
  <div className="navbar bg-ghost shadow-sm">
  <div className="flex-1">
    <a className="normal-case text-3xl font-bold">Larning Muster</a>
  </div>
  <div className="flex-none gap-2 text-xl font-bold px-4 list-none">
  
      <li className='px-3'>Home</li>
      <li className='px-3'>Menu</li>
      <li className='px-3 lg:block hidden '>Blog</li>
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar lg:block hidden">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/200" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;