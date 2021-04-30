import React from 'react';
import { Video } from '../../../data/PlaylistItems';
import VideoListItem from '../ListItem/ListItem';
import './List.css';

interface IVideoListProps {
    videos: Video[];
    onItemSelect: (selectedItem: Video) => void;
    selectedItem: Video | null,
    thumbnailWidth: number
}

const VideoList: React.FC<IVideoListProps> = (props) => {
    const { videos, selectedItem, thumbnailWidth } = props;

    const handleItemSelection = (selectedItem: Video) => {
        props.onItemSelect(selectedItem);
    };

    const checkIfSelected = (video: Video) => {
        return selectedItem ?
            video.id === selectedItem.id :
            false
    };

    const liStyle = {
        width: thumbnailWidth
    };

    return <section className="video-list">
        <h3>Inne wideo</h3>
        <ul>
            {videos.map((video) =>
                <li key={video.id} style={liStyle}>
                    <VideoListItem video={video} onItemClick={handleItemSelection} selected={checkIfSelected(video)} />
                </li>
            )}
        </ul>

    </section>;
};

export default VideoList;