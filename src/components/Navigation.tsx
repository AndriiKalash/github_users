import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="flex justify-between items-center h-[50px] shadow-md bg-gray-500 text-white px-5">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favourites">Favourites</Link>
      </span>
    </div>
  );
}
