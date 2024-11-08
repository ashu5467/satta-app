import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">MatkaApp</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="#about-matka" className="hover:text-gray-400">About Matka</a>
        </li>
        <li>
          <a href="#learn-matka" className="hover:text-gray-400">Learn Matka</a>
        </li>
        <li>
          <a href="#guess-matka" className="hover:text-gray-400">Guess Matka</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
