import React from 'react';
import { HomeViewWrapper, HomeViewTitle, HomeViewCardContainer } from './HomeView.styled';
import Card from '../Card/Card.component';
// import videos from '../../resources/youtube-videos-mock.json';
import useVideosSearch from '../../utils/hooks/useVideosSearch';

function HomeView(props) {
  const { search } = props;
  const videos = useVideosSearch(search);

  return (
    <HomeViewWrapper>
      <HomeViewTitle>Welcome to the Challenge!</HomeViewTitle>
      <HomeViewCardContainer>
        {videos.map((video) => (
          <div key={video.etag}>
            <Card
              photoHeader={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
              videoId={video.id.videoId}
            />
          </div>
        ))}
      </HomeViewCardContainer>
    </HomeViewWrapper>
  );
}

export default HomeView;
