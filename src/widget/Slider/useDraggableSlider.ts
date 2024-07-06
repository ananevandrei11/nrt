import { useRef, useEffect } from 'react';
import { useIsClient } from '@/utils/hooks';

export function useDraggableSlider() {
  const isClient = useIsClient();
  const scrollRef = useRef<HTMLUListElement>(null);
  const isDragging = useRef<boolean>(false);
  const startScrollX = useRef<number>(0);
  const startX = useRef<number>(0);

  useEffect(() => {
    if (scrollRef.current && isClient) {
      const scrollableContent = scrollRef.current;
      scrollableContent.addEventListener('mousedown', (e) => {
        isDragging.current = true;
        startScrollX.current = scrollableContent.scrollLeft;
        startX.current = e.clientX;
        e.preventDefault();
      });

      document.addEventListener('mouseup', () => {
        isDragging.current = false;
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging.current) return;
        const deltaX = e.clientX - startX.current;
        scrollableContent.scrollLeft = startScrollX.current - deltaX;
      });
    }
  }, [isClient]);

  return {
    scrollRef,
  };
}
