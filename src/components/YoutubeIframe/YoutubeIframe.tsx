'use client';
import { useCallback, useEffect, useId, useRef } from 'react';

interface Props {
  videoId: string;
  isReady: boolean;
  className?: string;
}

export const YoutubeIframe = ({ videoId, isReady, className }: Props) => {
  const htmlId = useId();
  const playerRef = useRef<YT.Player | null>(null);

  const loadVideo = useCallback(() => {
    new window.YT.Player(htmlId, {
      videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        mute: 1,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }, [htmlId, videoId]);

  useEffect(() => {
    if (window.YT && isReady) {
      loadVideo();
    }
  }, [isReady, loadVideo]);

  const onPlayerReady = (event: YT.PlayerEvent) => {
    playerRef.current = event.target;
  };

  const handlePause = () => {
    playerRef.current?.pauseVideo();
  };
  const handlePlay = () => {
    playerRef.current?.playVideo();
  };

  return (
    <section className={className}>
      <div id={htmlId} />
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
    </section>
  );
};
