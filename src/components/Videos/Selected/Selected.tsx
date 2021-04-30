import React from 'react';
import { Video } from '../../../data/PlaylistItems';
import  YoutubeEmbededVideo  from '../YoutubeEmbededVideo/YoutubeEmbededVideo';

interface ISelectedVideoProps {
    video: Video;
}

const SelectedVideo: React.FC<ISelectedVideoProps> = (props) => {
    const { id, description, title } = props.video;

    return <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <div id="current-video">
            <YoutubeEmbededVideo id={id} />
        </div>
    </section>
};

export default SelectedVideo;