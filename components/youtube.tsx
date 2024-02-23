import React from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
    videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({videoId}) => {
    const opts = {
        width: '100%', // Set width to 100% to make it responsive
        height: '100%', // Set height to 100% to maintain aspect ratio
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="youtube-player relative mt-2 w-full h-[95%] md:h-[90%] flex flex-col">
            <YouTube
                videoId={videoId}
                opts={opts}
                className={"w-full max-h-full object-scale-down h-full flex-1"}
            />
        </div>
    );
};

export default YouTubePlayer;
