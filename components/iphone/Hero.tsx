import Image from 'next/image';
import s from './Hero.module.css';

type Tile = {
  label: string;
  href: string;
  image: string; // path under /public
  tag?: string; // e.g. "Новий"
};

const TILES: Tile[] = [
  { label: 'iPhone 17 Pro', href: '/iphone/iphone-17-pro', image: '/images/iPhone/iphone_17pro.png' },
  { label: 'iPhone Air', href: '/iphone/iphone-air', image: '/images/iPhone/iphone-air.png' },
  { label: 'iPhone 17', href: '/iphone/iphone-17', image: '/images/iPhone/iphone_17.png' },
  { label: 'iPhone 17e', href: '/iphone/iphone-17e', image: '/images/iPhone/iphone_17e.png', tag: 'Новий' },
  { label: 'iPhone 16', href: '/iphone/iphone-16', image: '/images/iPhone/iphone_16.png' },
  { label: 'Порівняйте', href: '/iphone/compare', image: '/images/iPhone/compare_phones.png' },
];

export default function Hero() {
  return (
    <section className={s.hero}>
      <h1 className={s.headline}>iPhone</h1>

      <ul className={s.tiles}>
        {TILES.map(tile => (
          <li key={tile.label} className={s.tile}>
            <a href={tile.href} className={s.tileLink}>
              <span className={s.imageWrap}>
                <Image
                  src={tile.image}
                  alt={tile.label}
                  width={140}
                  height={280}
                  className={s.tileImage}
                />
              </span>
              <span className={s.tileLabel}>{tile.label}</span>
              {tile.tag && <span className={s.tileTag}>{tile.tag}</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}