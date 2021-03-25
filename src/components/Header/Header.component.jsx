import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderWrapper, HamburgerButton, RightElements } from './Header.styled';
import { useTheme } from '../../providers/Theme';
import SearchBar from '../SearchBar/SearchBar.component';
import ProfileButton from '../ProfileButton/ProfileButton.component';
import DisplayToggle from '../DisplayToggle/DisplayToggle.component';

function Header() {
  const { getTheme } = useTheme();
  const theme = getTheme();

  return (
    <HeaderWrapper theme={theme}>
      <HamburgerButton type="submit">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </HamburgerButton>
      <SearchBar />
      <RightElements>
        <DisplayToggle />
        <ProfileButton />
      </RightElements>
    </HeaderWrapper>
  );
}

export default Header;
