import { YoutubeThirdParty } from '@/components';

export default function YoutubePlugin() {
  return (
    <section>
      <h1>
        Youtube Plugin <code>react-youtube</code>
      </h1>
      <YoutubeThirdParty className="mb-5 border-solid border-4 border-black" />
    </section>
  );
}
