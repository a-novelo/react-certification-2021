import styled from 'styled-components';

const FavoritesWrapper = styled.div`
  align-items: center;
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#303030')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
  margin-top: 64px;
`;

const FavoritesCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 601px) and (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 771px) and (max-width: 1130px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1131px) and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export { FavoritesWrapper, FavoritesCardContainer };
