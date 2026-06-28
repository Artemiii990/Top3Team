import Image from 'next/image';
import s from './Essentials.module.css';

type Card = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const CARDS: Card[] = [
  {
    id: 'accessories',
    title: 'Аксесуари для iPhone',
    description:
      'Убезпечте і персоналізуйте свій iPhone за допомогою нових аксесуарів, як-от яскраві чохли чи нові ремінці через плече тощо.',
    image: '/images/iphone/iphone-accessories.png',
    alt: 'Аксесуари для iPhone',
  },
  {
    id: 'airtag',
    title: 'AirTag',
    description:
      'Прикріпіть один AirTag до своїх ключів, а інший покладіть у рюкзак. Якщо загубили їх, просто скористайтеся Локатором.',
    image: '/images/iphone/airtag-1.png',
    alt: 'AirTag',
  },
];

export default function Essentials() {
  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Усе, що потрібно для iPhone.</h2>
      </div>

      <ul className={s.track}>
        {CARDS.map(card => (
          <li key={card.id} className={`${s.card} ${s[card.id] || ''}`}>
            <h3 className={s.cardTitle}>{card.title}</h3>

            <p className={s.cardDescription}>
              {card.description}
            </p>

            <div className={s.imageWrapper}>
              <Image
                src={card.image}
                alt={card.alt}
                width={500}
                height={500}
                className={s.image}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}