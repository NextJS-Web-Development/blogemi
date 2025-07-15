'use client';

import React, { JSX, useRef } from 'react';


interface SearchQueryProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsSearchTriggered: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearch: () => void;
}

export default function SearchQueryComponent({
  searchQuery,
  setSearchQuery,
  setIsSearchTriggered,
  handleSearch,
}: SearchQueryProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchTriggered(false);
    setSearchQuery(e.target.value);
  };

  const onSubmitClick = () => {
    if (searchQuery.length == 0) inputRef.current?.focus();
    else handleSearch();
  };

  return (
    <div>
      <input
        aria-label="Search blogs by title or tags"
        type="text"
        id="search"
        name="search"
        placeholder="Search by title or tags"
        value={searchQuery}
        onChange={handleQueryChange}
        ref={inputRef}
      />
      <button type="button" onClick={onSubmitClick}>
        Search
      </button>
    </div>
  );
}
