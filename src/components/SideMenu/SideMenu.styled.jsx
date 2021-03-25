import styled from 'styled-components';

const SideMenuWrapper = styled.div`
  background-color: white;
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 20%;
`;

const SideMenuOption = styled.div`
  border-bottom: 1px solid black;
  color: black;
  text-align: initial;
  padding: 10px 20px;
  cursor: pointer;
`;

export { SideMenuWrapper, SideMenuOption };
