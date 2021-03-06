import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper, HamburgerButton, RightElements } from './Header.styled';
import SearchBar from '../SearchBar/SearchBar.component';
import ProfileButton from '../ProfileButton/ProfileButton.component';
import DisplayToggle from '../DisplayToggle/DisplayToggle.component';

function Header() {
  return (
    <Wrapper>
      <HamburgerButton type="submit">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </HamburgerButton>
      <SearchBar />
      <RightElements>
        <DisplayToggle />
        <ProfileButton />
      </RightElements>
    </Wrapper>
  );
}

export default Header;
