import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signoutAction } from '../../service/Action/registrarAction.js';

const Header = () => {
  const dispatch = useDispatch();
  const { login, user } = useSelector(state => state.authReducer);

  const handleLogout = () => {
    dispatch(signoutAction());
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
      <nav className="flex items-center max-w-7xl mx-auto justify-between">
        <h1 className="text-xl font-bold">
          <Link to="/">Emp</Link>
        </h1>
        <ul className="flex mx-auto space-x-7">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/view-data" className="hover:underline">View Data</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          {!login ? (
            <>
              <Link to="/registerform" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">Register</Link>
              <Link to="/login-form" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">Login</Link>
            </>
          ) : (
            <>
              <span className="text-gray-300">Hello, {user?.email}</span>
              <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">Logout</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
