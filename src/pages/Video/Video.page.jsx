import React, { useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  VideoCard,
  BodyWrapper,
  VideoContainer,
  VideoBody,
  VideoTitle,
  VideoDescription,
  VideoFavoritesButton,
  RelatedVideosContainer,
} from './Video.styled';
import { Header, RelatedVideoCard } from '../../components';
import { useSearch } from '../../providers/Search';
import useVideos from '../../utils/hooks/useVideos';
import useRelatedVideoList from '../../utils/hooks/useRelatedVideoList';
import { FAVORITES_ARRAY } from '../../utils/constants';
import { storage } from '../../utils/storage';
// import videos from '../../resources/youtube-videos-mock.json';

function Video() {
  const sectionRef = useRef(null);
  const { videoId } = useParams();
  const { getSearch } = useSearch();
  const searchTerm = getSearch();
  const history = useHistory();
  const video = useVideos(videoId);
  const relatedVideos = useRelatedVideoList(videoId);

  const favoritesList = storage.get(FAVORITES_ARRAY) ? storage.get(FAVORITES_ARRAY) : [];
  const [isFavorite, setIsFavorite] = useState(favoritesList.indexOf(videoId) !== -1);

  if (searchTerm !== '') {
    history.push({ pathname: '/', state: { search: searchTerm } });
  }

  const addFavorites = () => {
    favoritesList.push(videoId);
    storage.set(FAVORITES_ARRAY, favoritesList);
    setIsFavorite(true);
  };

  const removeFavorites = () => {
    const indexFavorite = favoritesList.indexOf(videoId);
    if (indexFavorite >= 0) {
      favoritesList.splice(indexFavorite, 1);
    }
    storage.set(FAVORITES_ARRAY, favoritesList);
    setIsFavorite(false);
  };

  return (
    <section className="video" ref={sectionRef}>
      <Header />
      {video[0] && (
        <BodyWrapper>
          <VideoContainer>
            <VideoCard dangerouslySetInnerHTML={{ __html: video[0].player.embedHtml }} />
            <VideoBody>
              <VideoTitle>{video[0].snippet.title}</VideoTitle>
              <VideoDescription>{video[0].snippet.description}</VideoDescription>
              {isFavorite ? (
                <VideoFavoritesButton onClick={removeFavorites}>
                  Eliminar de favoritos
                </VideoFavoritesButton>
              ) : (
                <VideoFavoritesButton onClick={addFavorites}>
                  Agregar a favoritos
                </VideoFavoritesButton>
              )}
            </VideoBody>
          </VideoContainer>
          <RelatedVideosContainer>
            {relatedVideos.map((relatedVideo) => (
              <div key={relatedVideo.etag}>
                <RelatedVideoCard
                  photoHeader={
                    relatedVideo.snippet &&
                    relatedVideo.snippet.thumbnails &&
                    relatedVideo.snippet.thumbnails.high.url
                  }
                  title={relatedVideo.snippet && relatedVideo.snippet.title}
                  videoId={relatedVideo.id.videoId}
                />
              </div>
            ))}
          </RelatedVideosContainer>
        </BodyWrapper>
      )}
    </section>
  );
}

export default Video;
