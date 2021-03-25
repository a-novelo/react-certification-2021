import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  LoginModalWrapper,
  LoginContainer,
  FailedLoginContainer,
  LoginForm,
  LoginField,
  LoginLabel,
  LoginFieldTitle,
  LoginFieldInput,
  LoginButtonsContainer,
  LoginButton,
} from './LoginModal.styled';
import { useAuth } from '../../providers/Auth';

function LoginModal(props) {
  const { showModal, handleClose } = props;
  const { login } = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showFailedLogin, setShowFailedLogin] = useState(false);

  function authenticate(event) {
    event.preventDefault();
    const user = login(username, password);
    if (user === undefined) {
      setShowFailedLogin(true);
    } else {
      handleClose(false);
      history.push('/');
    }
  }

  return (
    <LoginModalWrapper show={showModal}>
      <LoginContainer>
        Login
        <FailedLoginContainer show={showFailedLogin}>
          <FontAwesomeIcon icon={faExclamationCircle} />
          Invalid username and/or password
        </FailedLoginContainer>
        <LoginForm onSubmit={authenticate}>
          <LoginField>
            <LoginLabel htmlFor="username">
              <LoginFieldTitle>username </LoginFieldTitle>
              <LoginFieldInput
                required
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </LoginLabel>
          </LoginField>
          <LoginField>
            <LoginLabel htmlFor="password">
              <LoginFieldTitle>password </LoginFieldTitle>
              <LoginFieldInput
                required
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </LoginLabel>
          </LoginField>
          <LoginButtonsContainer>
            <LoginButton
              type="button"
              onClick={() => {
                handleClose(false);
              }}
            >
              CANCEL
            </LoginButton>
            <LoginButton type="submit">LOGIN</LoginButton>
          </LoginButtonsContainer>
        </LoginForm>
      </LoginContainer>
    </LoginModalWrapper>
  );
}

export default LoginModal;
