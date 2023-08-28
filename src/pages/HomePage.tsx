import React, { useState } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';
import useDebounce from '../hooks/useDebounce';

export default function HomePage() {
  const [searchUser, setSerchUser] = useState<string>('');
  const delaySearch = useDebounce(searchUser, 1000);
  const { isLoading, isError, data } = useSearchUsersQuery(delaySearch, {
    skip: !delaySearch,
    refetchOnFocus: true, //automatic query when come back from another page
  });

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong</p>
      )}
      <div className="relative w-[560px]">
        <input
          type="text"
          value={searchUser}
          onChange={(e) => setSerchUser(e.target.value)}
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
        />
        {delaySearch && (
          <ul className="absolute list-none top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map((user) => (
              <li
                className="py-2 px-4 hover:text-white hover:bg-gray-500 transition-color cursor-pointer"
                key={user.id}>
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
