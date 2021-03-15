import React, { useState, useContext, useCallback } from 'react';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchProvider.`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const getSearch = useCallback(() => {
    return searchTerm;
  }, [searchTerm]);

  const setSearch = useCallback((search) => {
    setSearchTerm(search);
  }, []);

  return (
    <SearchContext.Provider value={{ getSearch, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
