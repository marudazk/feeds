
import React from 'react';

interface IYoutubeEmbededVideoProps { 
    id: string;
}
// Spróbuj to zrobić na canvas, bo chyba da się
const YoutubeEmbededVideo: React.FC<IYoutubeEmbededVideoProps> = (props) =>    <iframe title="youtube-video" width="560" height="315" src={"https://www.youtube.com/embed/" + props.id} 
></iframe>;


export default YoutubeEmbededVideo;