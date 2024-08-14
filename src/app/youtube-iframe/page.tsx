'use client';

import Script from 'next/script';
import { YoutubeIframe } from '@/components';
import { useState } from 'react';

export default function Youtube() {
  const [load, setLoad] = useState(true);
  return (
    <section>
      <h1>Youtube Default Script EmBed API</h1>
      <YoutubeIframe className="mb-5 border-solid border-4 border-black" isReady={load} videoId="GUwizGbY4cc" />
      <Script src="https://www.youtube.com/iframe_api" onLoad={() => setLoad(true)} strategy="beforeInteractive" />
    </section>
  );
}
