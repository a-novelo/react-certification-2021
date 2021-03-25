import React, { useRef } from 'react';
import { FavoritesWrapper, FavoritesCardContainer } from './Favorites.styled';
import { Header, Card } from '../../components';
import { useTheme } from '../../providers/Theme';
import useVideos from '../../utils/hooks/useVideos';
import { FAVORITES_ARRAY } from '../../utils/constants';
import { storage } from '../../utils/storage';

function Favorites() {
  const sectionRef = useRef(null);
  const { getTheme } = useTheme();
  const theme = getTheme();

  const favoritesList = storage.get(FAVORITES_ARRAY)
    ? storage.get(FAVORITES_ARRAY).toString()
    : '';
  const favoriteVideos = useVideos(favoritesList);

  return (
    <section ref={sectionRef}>
      <Header />
      <FavoritesWrapper theme={theme}>
        <FavoritesCardContainer>
          {favoriteVideos.map((video) => (
            <div key={video.etag}>
              <Card
                photoHeader={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                description={video.snippet.description}
                videoId={video.id}
              />
            </div>
          ))}
        </FavoritesCardContainer>
      </FavoritesWrapper>
    </section>
  );
}

export default Favorites;
