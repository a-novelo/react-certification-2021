import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  CardWrapper,
  CardButton,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
} from './Card.styled';

function Card(props) {
  const history = useHistory();
  const { photoHeader, title, description, videoId } = props;

  return (
    <CardWrapper>
      <CardButton
        onClick={() => {
          history.push(`/video/${videoId}`);
        }}
      >
        <CardImage src={photoHeader} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardBody>
      </CardButton>
    </CardWrapper>
  );
}

export default Card;
