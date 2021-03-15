import React from 'react';
import { HomeViewWrapper, HomeViewTitle, HomeViewCardContainer } from './HomeView.styled';
import Card from '../Card/Card.component';
import { useSearch } from '../../providers/Search';
import { useTheme } from '../../providers/Theme';
// import videos from '../../resources/youtube-videos-mock.json';
import useVideosSearch from '../../utils/hooks/useVideosSearch';

function HomeView() {
  const { getSearch } = useSearch();
  const { getTheme } = useTheme();
  const search = getSearch();
  const theme = getTheme();
  const videos = useVideosSearch(search);

  return (
    <HomeViewWrapper theme={theme}>
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
