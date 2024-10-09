import Image from 'next/image';

import cn from './styles.module.css';
import { uniqueId } from 'lodash';

export default function Test() {
  return (
    <main>
      <section>
        <h2>Images Columns</h2>
        <div className={cn.root}>
          {Array.from({ length: 15 }).map(() => {
            const random = Math.floor(Math.random() * 10);
            return (
              <div key={uniqueId()} className={cn.imageContainer}>
                <Image
                  src={`https://picsum.photos/${100 + random * 20}/${100 + random * 30}`}
                  alt=" "
                  width={100 + random * 20}
                  height={100 + random * 30}
                  blurDataURL={`https://picsum.photos/${100 + random * 20}/${100 + random * 30}`}
                  placeholder="blur"
                  className={cn.image}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
