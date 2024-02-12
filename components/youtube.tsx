import React from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';

export const Youtube = ({
                            yt,
                        }: {
    yt: {
        id: string;
        width: number;
        height: number;
    }[];
}) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    return (
        <>
            {yt.map((item, index) => (
                <YouTube
                    key={index} // make sure to add a unique key for each item
                    videoId={item.id}
                    opts={{
                        height: item.height,
                        width: item.width,
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 1,
                        },
                    }}
                    onReady={onPlayerReady}
                />
            ))}
        </>
    );
};
