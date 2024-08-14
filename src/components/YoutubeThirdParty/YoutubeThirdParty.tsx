'use client';
import { useRef } from 'react';
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube';

interface Props {
  className?: string;
}

export const YoutubeThirdParty = ({ className }: Props) => {
  const player = useRef<YouTubePlayer | null>(null);
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    player.current = event.target;
  };

  const handlePause = () => {
    player?.current?.pauseVideo?.();
  };
  const handlePlay = () => {
    player.current?.playVideo();
  };

  return (
    <div className={className}>
      <YouTube videoId="GUwizGbY4cc" onReady={onPlayerReady} />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePause}
      >
        Pause
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePlay}
      >
        Play
      </button>
    </div>
  );
};
