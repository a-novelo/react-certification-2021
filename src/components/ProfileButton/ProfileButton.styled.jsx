import styled from 'styled-components';

const ProfileButtonWrapper = styled.div``;

const ProfileButtonContainer = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font: inherit;
  margin-left: auto;
  outline: inherit;
  padding: 0;
`;

const UserAvatar = styled.img`
  border-radius: 20px;
  height: 35px;
  object-fit: cover;
  width: 35px;
`;

export { ProfileButtonWrapper, ProfileButtonContainer, UserAvatar };
