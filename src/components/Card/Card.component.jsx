import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../../providers/Theme';
import {
  CardWrapper,
  CardButton,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
} from './Card.styled';

function Card(props) {
  const { getTheme } = useTheme();
  const history = useHistory();
  const theme = getTheme();
  const { photoHeader, title, description, videoId } = props;

  return (
    <CardWrapper theme={theme}>
      <CardButton
        onClick={() => {
          history.push(`/video/${videoId}`);
        }}
      >
        <CardImage src={photoHeader} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardDescription theme={theme}>{description}</CardDescription>
        </CardBody>
      </CardButton>
    </CardWrapper>
  );
}

export default Card;
