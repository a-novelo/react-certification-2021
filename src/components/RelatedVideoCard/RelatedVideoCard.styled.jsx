import styled from 'styled-components';

const RelatedVideoCardWrapper = styled.div`
  border: 1px solid silver;
  height: 75px;
  overflow: hidden;
  width: 100%;
`;

const RelatedVideoCardButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font: inherit;
  outline: inherit;
  padding: 0;
`;

const RelatedVideoCardImage = styled.img`
  height: 100%;
  width: 100px;
  object-fit: cover;
`;

const RelatedVideoCardBody = styled.div`
  text-align: start;
  padding: 16px;
`;

const RelatedVideoCardTitle = styled.div`
  font-size: 16px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

export {
  RelatedVideoCardWrapper,
  RelatedVideoCardButton,
  RelatedVideoCardImage,
  RelatedVideoCardBody,
  RelatedVideoCardTitle,
};
