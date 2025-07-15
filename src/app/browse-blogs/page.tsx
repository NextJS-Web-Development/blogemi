'use client';

import { JSX, useState } from 'react';
import { BlogProps } from '@/library/types';
import browseBlogs from '@/system/pages/browse-blogs';

import SearchQueryComponent from './SearchQuery';
import BlogLoaderComponent from './BlogLoader';

export default function Page(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loadedBlogs, setLoadedBlogs] = useState<BlogProps[]>([]);
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  
  const handleSearch = () => {
    setIsSearchTriggered(true);
    browseBlogs({
      searchQuery,
      setLoadedBlogs
    })
  }
  
  return (
    <div>
      <h1>Browse Blogs</h1>
      <SearchQueryComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        setIsSearchTriggered={setIsSearchTriggered}
      />
      <BlogLoaderComponent
        loadedBlogs={loadedBlogs}
        isSearchTriggered={isSearchTriggered}
        searchQuery={searchQuery}
      />
    </div>
  );
}