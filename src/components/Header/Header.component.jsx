import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderWrapper, HamburgerButton, RightElements } from './Header.styled';
import { useTheme } from '../../providers/Theme';
import SearchBar from '../SearchBar/SearchBar.component';
import ProfileButton from '../ProfileButton/ProfileButton.component';
import DisplayToggle from '../DisplayToggle/DisplayToggle.component';
import SideMenu from '../SideMenu/SideMenu.component';

function Header() {
  const { getTheme } = useTheme();
  const theme = getTheme();
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <HeaderWrapper theme={theme}>
      <SideMenu show={showSideMenu} handleClose={setShowSideMenu} />
      <HamburgerButton
        type="submit"
        data-testid="hamburger-button"
        onClick={() => {
          setShowSideMenu(!showSideMenu);
        }}
      >
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
