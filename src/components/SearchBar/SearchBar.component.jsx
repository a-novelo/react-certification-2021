import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper, SearchBarIcon, SearchBarInput } from './SearchBar.styled';

function SearchBar() {
  return (
    <Wrapper>
      <SearchBarIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchBarIcon>
      <SearchBarInput placeholder="Search..." />
    </Wrapper>
  );
}

export default SearchBar;
