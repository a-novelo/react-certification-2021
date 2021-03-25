import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearch } from '../../providers/Search';
import { SearchBarWrapper, SearchBarIcon, SearchBarInput } from './SearchBar.styled';

function SearchBar() {
  const { setSearch } = useSearch();

  const inputSearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
    }
  };

  return (
    <SearchBarWrapper>
      <SearchBarIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchBarIcon>
      <SearchBarInput placeholder="Search..." onKeyDown={inputSearch} />
    </SearchBarWrapper>
  );
}

export default SearchBar;
