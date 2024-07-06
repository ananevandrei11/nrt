'use client';
import { CSSProperties } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import cn from './Slider.module.css';
import { useDraggableSlider } from './useDraggableSlider';

const slides = [
  { id: 1, title: 'Slide 1', image: 'https://picsum.photos/500/500?1', caption: 'Caption 1' },
  { id: 2, title: 'Slide 2', image: 'https://picsum.photos/500/500?2', caption: 'Caption 2' },
  { id: 3, title: 'Slide 3', image: 'https://picsum.photos/500/500?3', caption: 'Caption 3' },
  { id: 4, title: 'Slide 4', image: 'https://picsum.photos/500/500?4', caption: 'Caption 4' },
  { id: 5, title: 'Slide 5', image: 'https://picsum.photos/500/500?5', caption: 'Caption 5' },
  { id: 6, title: 'Slide 6', image: 'https://picsum.photos/500/500?6', caption: 'Caption 6' },
  { id: 7, title: 'Slide 7', image: 'https://picsum.photos/500/500?7', caption: 'Caption 7' },
  { id: 8, title: 'Slide 8', image: 'https://picsum.photos/500/500?8', caption: 'Caption 8' },
  { id: 9, title: 'Slide 9', image: 'https://picsum.photos/500/500?9', caption: 'Caption 9' },
  { id: 10, title: 'Slide 10', image: 'https://picsum.photos/500/500?10', caption: 'Caption 10' },
  { id: 11, title: 'Slide 11', image: 'https://picsum.photos/500/500?11', caption: 'Caption 11' },
];

const countItems = slides.length;

interface CSSVariables {
  '--count-items': number;
}
const containerStyle: CSSProperties & CSSVariables = {
  '--count-items': countItems,
};

export default function Slider() {
  const { scrollRef } = useDraggableSlider();

  return (
    <div className="container mx-auto px-4 overflow-hidden flex flex-col justify-center items-center gap-4">
      <ul
        ref={scrollRef}
        style={containerStyle}
        className={clsx(
          'w-full grid grid-flow-col overflow-x-scroll scroll-smooth',
          'grid-cols-[repeat(var(--count-items),100%)] sm:grid-cols-[repeat(var(--count-items),33.33%)] lg:grid-cols-[repeat(var(--count-items),25%)]',
          cn.list
        )}
        draggable="true"
      >
        {slides.map((slide) => (
          <li key={slide.id} className={clsx('w-full overflow-hidden', cn.item)} id={String(slide.id)}>
            <figure className="relative h-40">
              <Image
                src={slide.image}
                fill={true}
                alt={slide.title}
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <figcaption>{slide.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <nav className="flex gap-2">
        {slides.map((slide) => (
          <a
            key={`link-${slide.id}`}
            href={`#${slide.id}`}
            title={slide.title}
            className="inline-block w-3 h-3 bg-current rounded-full"
          />
        ))}
      </nav>
      <p className="text-sm">
        There are certain limitations when using the{' '}
        <code className="bg-blue-950 p-0.5 font-semibold text-cyan-100">scroll-snap-type</code> and{' '}
        <code className="bg-blue-950 p-0.5 font-semibold text-cyan-100">scroll-behavior</code> properties together,
        especially in the context of smooth scrolling{' '}
        <code className="bg-blue-950 p-0.5 font-semibold text-cyan-100">scroll-behavior: smooth</code>
      </p>
    </div>
  );
}
