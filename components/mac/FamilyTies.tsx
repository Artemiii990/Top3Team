'use client';

import { useState } from 'react';
import Image from 'next/image';
import s from './FamilyTies.module.css';

type Row = {
  id: string;
  title: string;
  description: string;
  image: string; // path under /public
};

const ROWS: Row[] = [
  {
    id: 'mac',
    title: 'iPhone і Mac',
    description:
      'Ви можете копіювати зображення, відео або текст із iPhone безпосередньо на Mac, а потім вставляти їх в інший додаток на сусідньому Mac, паралельно відповідаючи на дзвінки або повідомлення з iPhone. А завдяки iCloud ви можете отримати доступ до улюблених файлів на обох пристроях.',
    image: '/images/iphone/iphone-mac.jpg',
  },
  {
    id: 'watch',
    title: 'iPhone та Apple Watch',
    description:
      'Загубили свій iPhone? Останні моделі Apple Watch можуть показувати приблизну відстань і напрямок, де його шукати. Щоб налаштувати групове фото на iPhone, приєднайтеся до групи та використовуйте Apple Watch як видошукач, щоб зробити знімок. Коли ви відповідаєте на дзвінок на Apple Watch, просто торкніться iPhone, щоб продовжити розмову на ньому.',
    image: '/images/iphone/iphone-watch.jpeg',
  },
  {
    id: 'airpods',
    title: 'iPhone та AirPods',
    description:
      'Налаштуйте AirPods на iPhone одним дотиком. Вам сподобається технологія адаптивного аудіо, яка автоматично налаштовує шумоконтроль для найкращої якості прослуховування в будь-яких умовах і під час різних взаємодій протягом дня.',
    image: '/images/iphone/iphone-airpods.jpg',
  },
];

export default function FamilyTies() {
  const [openId, setOpenId] = useState<string>(ROWS[0].id);

  const activeRow = ROWS.find(r => r.id === openId) ?? ROWS[0];
  
  const handleNext = () => {
    const currentIndex = ROWS.findIndex(row => row.id === openId);
    const nextIndex = (currentIndex + 1) % ROWS.length;

    setOpenId('');

    setTimeout(() => {
      setOpenId(ROWS[nextIndex].id);
    }, 300);
  };

  return (
    <section className={s.section}>
      <h2 className={s.heading}>Родинні зв'язки</h2>

      <div className={s.panel}>
        <div className={s.accordion}>
          {ROWS.map(row => {
            const isOpen = row.id === openId;
            return (
              <div key={row.id} className={s.item}>
                <button
                  type="button"
                  className={s.itemHeader}
                  aria-expanded={isOpen}
                  // onClick={() => setOpenId(row.id)}
                  onClick={isOpen ? handleNext : () => setOpenId(row.id)}
                >
                  <span className={s.itemTitle}>{row.title}</span>
                  <svg
                    className={`${s.chevron} ${isOpen ? s.chevronOpen : ''}`}
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  className={s.itemBody}
                  style={{ maxHeight: isOpen ? '320px' : '0px' }}
                  aria-hidden={!isOpen}
                >
                  {/* <p className={s.itemDescription}>{row.description}</p> */}
                  <p className={s.itemDescription}>
                    {row.id === 'watch' ? (
                      <>
                        Загубили свій iPhone? Останні моделі Apple Watch можуть показувати вам приблизну
                        відстань і напрямок, де його шукати
                        <a href="#footnote-13" className={s.footnoteLink}>
                          <sup>13</sup>
                        </a>.{' '}
                        Щоб налаштувати групове фото на iPhone, приєднайтеся до групи та використовуйте Apple Watch як видошукач, щоб зробити знімок.
                        Коли ви відповідаєте на дзвінок на Apple Watch, просто торкніться iPhone,
                        щоб продовжити розмову на ньому.
                      </>
                    ) : (
                      row.description
                    )}
                    </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`${s.imageArea} ${s[activeRow.id] || ''}`}>
          <Image
            key={activeRow.id}
            src={activeRow.image}
            alt={activeRow.title}
            width={920}
            height={840}
            className={s.image}
          />
        </div>
      </div>
    </section>
  );
}