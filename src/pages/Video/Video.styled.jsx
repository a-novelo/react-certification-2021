import styled from 'styled-components';

const VideoCard = styled.div``;

const VideoContainer = styled.div`
  width: 65%;
`;

const BodyWrapper = styled.div`
  background-color: white;
  align-items: center;
  margin-top: 64px;
`;

const VideoBody = styled.div`
  margin-left: 30px;
`;

const VideoTitle = styled.h3``;

const VideoDescription = styled.div`
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RelatedVideosContainer = styled.div`
  background-color: white;
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 64px;
  width: 35%;
`;

export {
  VideoCard,
  VideoContainer,
  BodyWrapper,
  VideoBody,
  VideoTitle,
  VideoDescription,
  RelatedVideosContainer,
};
