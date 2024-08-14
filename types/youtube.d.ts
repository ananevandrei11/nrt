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
      // Добавьте другие методы, которые вам нужны
    }

    interface PlayerOptions {
      height?: string;
      width?: string;
      videoId?: string;
      events?: {
        onReady?: (event: PlayerEvent) => void;
        onStateChange?: (event: PlayerEvent) => void;
        // Добавьте другие события, которые вам нужны
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
      // Добавьте другие свойства события, если нужно
    }
  }
}

export {};
