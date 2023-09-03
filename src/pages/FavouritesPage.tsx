import React from 'react';
import { useAppSelector } from '../hooks/useApp';
import { githubSelector } from '../store/github/github.slice';

export default function FavouritesPage() {
  const { favorites } = useAppSelector(githubSelector);

  if (favorites.length === 0) {
    return <p className="text-center pt-10">No favorites items.</p>;
  }

  return (
    <div className="flex justify-center mt-10 mx-auto h-screen w-screen ">
      <ul className="list-none w-[560px] ">
        {favorites.map((fav) => (
          <li
            className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all"
            key={fav}>
            <a href={fav} target="_blank" rel="noreferrer">
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
