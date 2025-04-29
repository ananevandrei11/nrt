import styles from './styles.module.css';

export default function GalleryScroll() {
  return (
    <main>
      <section>
        <h1>GalleryScroll</h1>
        <section className={styles.container}>
          <div className={styles.scroll}>
            <ul className={styles.list}>
              {Array.from({ length: 7 }, (_, i) => String(i)).map((i) => (
                <li key={i} className={styles.item}>
                  <div className={styles.card}></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
