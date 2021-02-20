import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper } from './ProfileButton.styled';

function ProfileButton() {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faUserCircle} size="2x" />
    </Wrapper>
  );
}

export default ProfileButton;
