import styled from 'styled-components';

const LoginModalWrapper = styled.div`
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.show ? 'block' : 'none')};
  font-size: 15px;
  height: 100%;
  left: 0;
  margin: 0 auto;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const LoginContainer = styled.div`
  background-color: white;
  border-radius: 25px;
  border: none;
  color: black;
  margin: 5% auto;
  padding: 20px;
  width: 60%;
`;

const FailedLoginContainer = styled.div`
  background-color: #ffe4ec;
  color: rgb(102, 9, 27);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const LoginForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const LoginLabel = styled.label``;

const LoginFieldTitle = styled.strong`
  display: block;
  font-weight: 700;
  margin-bottom: 0.4rem;
  text-transform: capitalize;
`;

const LoginFieldInput = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 1px solid white;
  font-size: 1.2rem;
  padding: 0.4rem 0.6rem;
  width: 100%;
`;

const LoginButtonsContainer = styled.div``;

const LoginButton = styled.button`
  border-radius: 3px;
  border: none;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 0.4rem 0.6rem;
`;

export {
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
};
