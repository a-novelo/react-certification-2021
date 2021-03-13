import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  RelatedVideoCardWrapper,
  RelatedVideoCardButton,
  RelatedVideoCardImage,
  RelatedVideoCardBody,
  RelatedVideoCardTitle,
} from './RelatedVideoCard.styled';

function RelatedVideoCard(props) {
  const history = useHistory();
  const { photoHeader, title, videoId } = props;

  return (
    <RelatedVideoCardWrapper>
      <RelatedVideoCardButton
        onClick={() => {
          history.push(`/video/${videoId}`);
        }}
      >
        <RelatedVideoCardImage src={photoHeader} />
        <RelatedVideoCardBody>
          <RelatedVideoCardTitle>{title}</RelatedVideoCardTitle>
        </RelatedVideoCardBody>
      </RelatedVideoCardButton>
    </RelatedVideoCardWrapper>
  );
}

export default RelatedVideoCard;
