import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchBarWrapper, SearchBarIcon, SearchBarInput } from './SearchBar.styled';

function SearchBar(props) {
  const { search } = props;

  const inputSearch = (e) => {
    if (e.key === 'Enter') {
      search(e.target.value);
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
