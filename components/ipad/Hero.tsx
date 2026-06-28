import Image from 'next/image';
import s from './Hero.module.css';

type Tile = {
  label: string;
  href: string;
  image: string; // path under /public
  tag?: string; // e.g. "Новий"
};

const TILES: Tile[] = [
  { label: 'iPad Pro', href: '/ipad/ipad-pro', image: '/images/iPad/ipad_pro.png' },
  { label: 'iPad Air', href: '/ipad/ipad-air', image: '/images/iPad/ipad_air.png', tag: 'Новий' },
  { label: 'iPad', href: '/ipad/ipad', image: '/images/iPad/ipad_.png' },
  { label: 'Порівняйте', href: '/ipad/compare', image: '/images/iPad/compare.png' },
  { label: 'Apple pencil', href: '/ipad/apple-pencil', image: '/images/iPad/apple_pencil.png' },
  { label: 'Клавіатура', href: '/ipad/keyboard', image: '/images/iPad/keyboards.png' },
];

export default function Hero() {
  return (
    <section className={s.hero}>
      <h1 className={s.headline}>iPad</h1>

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