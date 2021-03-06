import React from 'react';
import {
  Wrapper,
  CardButton,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
} from './Card.styled';

function Card(props) {
  const { photoHeader, title, description } = props;

  return (
    <Wrapper>
      <CardButton>
        <CardImage src={photoHeader} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardBody>
      </CardButton>
    </Wrapper>
  );
}

export default Card;
