import React from 'react';
import { Video } from '../../../data/PlaylistItems';
import './ListItem.css';

interface IVideoListItemProps {
    video: Video;
    onItemClick: (item: Video) => void;
    selected: boolean
}

const VideoListItem: React.FC<IVideoListItemProps> = (props) => {
    const { id, title, thumbnail, description } = { ...props.video };
    const selected = props.selected;

    const handleClick = () => {
        props.onItemClick(props.video);
    }

    return <div className={`video-list-item ${selected ? 'selected' : ''}`} >
        <p onClick={handleClick}>
            <img src={thumbnail.url} alt={title} />
        </p>
        <span>
            <a className="title" rel="noreferrer" href={'https://www.youtube.com/watch?v=' + id} target="_blank">{title}</a>
        </span>
        <p>{description}</p>
    </div>
};

export default VideoListItem;