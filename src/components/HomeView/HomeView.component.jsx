import React from 'react';
import { Wrapper, HomeViewTitle, HomeViewCardContainer } from './HomeView.styled';
import Card from '../Card/Card.component';
import mockData from '../../resources/youtube-videos-mock.json';

function HomeView() {
  return (
    <Wrapper>
      <HomeViewTitle>Welcome to the Challenge!</HomeViewTitle>
      <HomeViewCardContainer>
        {mockData.items.map((video) => (
          <div key={video.etag}>
            <Card
              photoHeader={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
            />
          </div>
        ))}
      </HomeViewCardContainer>
    </Wrapper>
  );
}

export default HomeView;
