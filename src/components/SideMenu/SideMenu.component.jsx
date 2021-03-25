import React from 'react';
import { useHistory } from 'react-router-dom';
import { SideMenuWrapper, SideMenuOption } from './SideMenu.styled';
import { useAuth } from '../../providers/Auth';

function SideMenu(props) {
  const { show, handleClose } = props;
  const history = useHistory();
  const { authenticated } = useAuth();

  const navigateTo = (page) => {
    handleClose(false);
    history.push(page);
  };

  return (
    <SideMenuWrapper show={show}>
      <SideMenuOption
        onClick={() => {
          navigateTo('/');
        }}
      >
        Home
      </SideMenuOption>
      {authenticated && (
        <SideMenuOption
          onClick={() => {
            navigateTo('/favorites');
          }}
        >
          Favorites
        </SideMenuOption>
      )}
    </SideMenuWrapper>
  );
}

export default SideMenu;
