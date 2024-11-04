// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">FM</div>

        {/* Navigation Items */}
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-gray-300">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/payment-details">Payment Details</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/transaction-history">Transaction History</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/loan-amount-tracker">Add Loan Amount</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/primefaces">Primefaces</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
