import { useEffect, useState } from 'react';

const fetchRelatedVideosList = async (relatedToVideoId) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const request = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${apiKey}&relatedToVideoId=${relatedToVideoId}`
  );

  const { items: videos, error: { message } = {} } = await request.json();

  if (message) {
    console.error('Error in useRelatedVideoList: ', message);
    return [];
  }

  return videos || [];
};

const useRelatedVideoList = (relatedToVideoId = '') => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchRelatedVideosList(relatedToVideoId).then((videoList) => {
      setVideos(videoList);
    });
  }, [relatedToVideoId]);
  return videos;
};

export default useRelatedVideoList;
