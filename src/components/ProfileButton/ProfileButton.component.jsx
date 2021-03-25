import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ProfileButtonWrapper,
  ProfileButtonContainer,
  UserAvatar,
} from './ProfileButton.styled';
import { useAuth } from '../../providers/Auth';
import LoginModal from '../LoginModal/LoginModal.component';

function ProfileButton() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { getUser, logout } = useAuth();
  const history = useHistory();

  const userData = getUser();
  const userAvatar = userData ? userData.avatarUrl : '';

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <ProfileButtonWrapper>
      <LoginModal
        showModal={showLoginModal}
        handleClose={() => {
          setShowLoginModal(false);
        }}
      />
      <ProfileButtonContainer>
        {userAvatar === '' ? (
          <FontAwesomeIcon
            icon={faUserCircle}
            data-testid="profile-icon"
            size="2x"
            onClick={() => {
              setShowLoginModal(true);
            }}
          />
        ) : (
          <UserAvatar id="imagenAjustador" src={userAvatar} onClick={deAuthenticate} />
        )}
      </ProfileButtonContainer>
    </ProfileButtonWrapper>
  );
}

export default ProfileButton;
