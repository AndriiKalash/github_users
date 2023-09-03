import React from 'react';
import { IRepo } from '../models/models';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import {
  addFavorite,
  deleteFavorite,
  githubSelector,
} from '../store/github/github.slice';

export default function RpoCard({ repo }: { repo: IRepo }) {
  const { favorites } = useAppSelector(githubSelector);
  const dispatch = useAppDispatch();

  const onAddFavorite = () => {
    dispatch(addFavorite(repo.html_url));
  };
  const onDeleteFavorite = () => {
    dispatch(deleteFavorite(repo.html_url));
  };

  const addedUrl = favorites.find((item) => item === repo.html_url);

  return (
    <div className=" flex justify-between border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <div>
        <h2 className="text-lg font-bold ">{repo.full_name}</h2>
        <p className="text-sm font-bold">
          Forks: <span className=" mr-2">{repo.forks}</span>
          Watchers: <span>{repo.watchers}</span>
        </p>
      </div>
      <div>
        {!addedUrl && (
          <button
            onClick={onAddFavorite}
            className="py-2 px-4 bg-yellow-400 rounded hover:bg-yellow-600 transition-all ">
            Add
          </button>
        )}

        {addedUrl && (
          <button
            onClick={onDeleteFavorite}
            className="py-2 px-4 bg-red-400 rounded hover:bg-red-600 transition-all ml-2">
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
