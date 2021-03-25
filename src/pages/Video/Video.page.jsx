import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  VideoCard,
  BodyWrapper,
  VideoContainer,
  VideoBody,
  VideoTitle,
  VideoDescription,
  RelatedVideosContainer,
} from './Video.styled';
import { Header, RelatedVideoCard } from '../../components';
import { useSearch } from '../../providers/Search';
import useVideo from '../../utils/hooks/useVideo';
import useRelatedVideoList from '../../utils/hooks/useRelatedVideoList';
// import videos from '../../resources/youtube-videos-mock.json';

function Video() {
  const sectionRef = useRef(null);
  const { videoId } = useParams();
  const { getSearch } = useSearch();
  const searchTerm = getSearch();
  const history = useHistory();
  const video = useVideo(videoId);
  const relatedVideos = useRelatedVideoList(videoId);

  if (searchTerm !== '') {
    history.push({ pathname: '/', state: { search: searchTerm } });
  }

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
