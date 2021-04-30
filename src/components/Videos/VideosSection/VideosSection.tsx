import React, { useState, useEffect, useRef } from 'react';
import VideoList from '../List/List';
import SelectedVideo from '../Selected/Selected';
import { PlaylistItem, Video } from '../../../data/PlaylistItems';
interface IVideosSectionProps { }

const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const PLAYLIST_ID = `PLJSCFZh9ytCHca7G1GFC6j0ExIjCqcH1O`;

const VideosSection: React.FC<IVideosSectionProps> = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectedVideoRef = useRef(null);
  const thumbnailWidth = 320;

  useEffect(() => {
    fetchPlaylist().then((videos) => {
      setVideos(videos)
    });
  }, []);

  const handleVideoChange = (video: Video) => {
    setSelectedVideo(video);
    if(selectedVideoRef && selectedVideoRef.current) {
      selectedVideoRef.current.scrollIntoView();
    }
  }

  return <div>
    <h2>Wideosy</h2>
    {selectedVideo ?
      <div ref={selectedVideoRef}>
        <SelectedVideo video={selectedVideo} />
      </div> :
      null
    }

    <VideoList thumbnailWidth={thumbnailWidth} videos={videos} onItemSelect={handleVideoChange} selectedItem={selectedVideo} />

  </div>;
};

export default VideosSection;


function fetchPlaylist(): Promise<Video[]> {
  return fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?playlistId=${PLAYLIST_ID}&part=snippet&key=${API_KEY}&maxResults=50`)
    .then((response) => response.json())
    .then(json => mapPlaylistItems(json.items))
    .catch((reason) => {
      console.log(reason);
      return [];
    });
}

function mapPlaylistItems(items: PlaylistItem[]): Video[] {
  return items.map((item: PlaylistItem) => {
    const { snippet } = item;
    const result: Video = {
      id: item.id,
      title: snippet.title,
      description: snippet.description,
      thumbnail: { url: snippet.thumbnails.medium.url }
    };
    return result;
  });
}