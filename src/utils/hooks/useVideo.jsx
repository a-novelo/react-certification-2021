import { useEffect, useState } from 'react';

const fetchVideo = async (videoId) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const request = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=player,snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`
  );

  const { items: video, error: { errMsg } = {} } = await request.json();

  if (errMsg) {
    console.error('Error in useVideo: ', errMsg);
    return [];
  }

  return video || [];
};

const useVideo = (videoId = '') => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchVideo(videoId).then((videoList) => {
      setVideo(videoList);
    });
  }, [videoId]);
  return video;
};

export default useVideo;
