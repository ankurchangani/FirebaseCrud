import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signoutAction } from '../../service/Action/registrarAction.js';

const Header = () => {
  const dispatch = useDispatch();
  const { login, user } = useSelector(state => state.authReducer);

  console.log('Login state:', login, 'User:', user); // Debugging log

  const handleLogout = () => {
    dispatch(signoutAction());
  };

  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="flex items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link to="/">Emp</Link>
        </h1>
        <ul className="flex space-x-4 mx-auto">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/view-data" className="hover:underline">View Data</Link></li>
          {!login ? (
            <>
              <Link to="/registerfrom" className="bg-red-500 text-white py-2 px-4 rounded">Register</Link>
              <Link to="/login-Form" className="bg-green-500 text-white py-2 px-4 rounded">Login</Link>
            </>
          ) : (
            <>
              <span className="text-gray-300">Hello, {user?.email}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">Logout</button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
