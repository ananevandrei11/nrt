declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }

  namespace YT {
    class Player {
      constructor(elementId: string | HTMLElement, options: PlayerOptions);
      playVideo(): void;
      pauseVideo(): void;
    }

    interface PlayerOptions {
      height?: string;
      width?: string;
      videoId?: string;
      events?: {
        onReady?: (event: PlayerEvent) => void;
        onStateChange?: (event: PlayerEvent) => void;
      };
      playerVars?: {
        autoplay?: 0 | 1;
        controls?: 0 | 1 | 2;
        enablejsapi?: 0 | 1;
        origin?: string;
        showinfo?: 0 | 1;
        rel?: 0 | 1;
        mute?: 0 | 1;
      };
    }

    interface PlayerEvent {
      target: Player;
    }
  }
}

export {};
