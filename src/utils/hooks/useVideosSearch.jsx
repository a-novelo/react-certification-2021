import { useEffect, useState } from 'react';

const fetchVideosList = async (search) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const request = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${apiKey}&q=${search}`
  );

  const { items: videos, error: { message } = {} } = await request.json();

  if (message) {
    console.error('Error in useVideosSearch: ', message);
    return [];
  }

  return videos || [];
};

const useVideosSearch = (search = '') => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideosList(search).then((videoList) => {
      setVideos(videoList);
    });
  }, [search]);
  return videos;
};

export default useVideosSearch;
