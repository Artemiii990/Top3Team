'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './MeetIphone.module.css';

type Block = {
  lead: string; // bold lead-in phrase
  body: string; // rest of the paragraph
  image: string; // path under /public, one photo per modal block
};

type Card = {
  id: string;
  eyebrow: string;
  headline: string; // can contain \n for a manual line break
  subtext?: string; // один рядок під headline
  image: string; // path under /public — card background photo
  blocks: Block[]; // one modal section per block, each with its own photo
};

const CARDS: Card[] = [
  {
    id: 'innovation',
    eyebrow: 'Інновація',
    headline: 'Створений міцним\nі прекрасним.',
    image: '/images/iPhone/meet_iphone-1.jpg',
    blocks: [
      {
        lead: 'Не має собі рівних.',
        body: 'iPhone знаний своїм культовим дизайном і сучасними матеріалами — як‑от iPhone 17 Pro з корпусом із термо­ко­ваного алюмінію для виняткових профе­сійних можливостей. А також найтонший серед iPhone — iPhone Air. Апаратні й програмні засоби розроблено в тандемі — наприклад, Dynamic Island, контролер камери та кнопка дії.',
        image: '/images/iphone/meet-1-1.jpg',
      },
      {
        lead: 'Час на його боці.',
        body: 'iPhone захищено Ceramic Shield. Наші найновіші моделі iPhone мають покриття Ceramic Shield 2 на передній панелі, яке втричі стійкіше до подряпин.1 iPhone 17 Pro та iPhone Air для додаткової міцності мають покриття Ceramic Shield і на задній панелі. Щось розлилося? Не перей­май­теся — iPhone захищено від бризок, тому йому не страшні ані вода, ані кава чи газовані напої.2',
        image: '/images/iphone/meet-1-2.jpg',
      },
      {
        lead: 'Легкість використання.',
        body: 'Ми розробляємо наші пристрої та програмні засоби одночасно, щоб забезпечити їх ідеальну сумісну роботу. Хочете поділитися своєю контактною інформацією? Тримайте свій iPhone біля пристрою іншого користувача. Нові навушники AirPods? Налаштуйте одним дотиком. А завдяки регу­лярним онов­ленням iOS ваш iPhone залиша­ти­меться як новий.',
        image: '/images/iphone/meet-1-3.jpg',
      },
    ],
  },
  {
    id: 'camera',
    eyebrow: 'Передові камери',
    headline: 'Тільки уявіть\nці фото та відео.',
    image: '/images/iphone/meet_iphone-2.jpg',
    blocks: [
      {
        lead: 'Просто, приголомшливо.',
        body: 'Удосконалені камери iPhone автоматично знімають феноменальні фотографії з чудовими кольорами та деталізацією. А завдяки новій фронтальній камері Center Stage в останніх моделях iPhone ви отримаєте більш гнучкі можливості для кадрування селфі та багато іншого.',
        image: '/images/iphone/meet-2-1.jpg',
      },
      {
        lead: 'Зумте й зуууумте.',
        body: 'Завдяки потужній системі камери iPhone ви отримуєте широкий діапазон фокусних відстаней та виняткову гнучкість кадрування — від чітких великих планів до панорамних знімків, що дають змогу охопити більше простору без потреби відступати назад. Знімайте зблизька, як ніколи раніше, завдяки зуму 8х оптичної якості на iPhone 17 Pro — найбільший зум серед усіх моделей iPhone.',
        image: '/images/iphone/meet-2-2.jpg',
      },
      {
        lead: 'Знімайте відео, як у кіно.',
        body: 'Отримуйте відео професійної якості за стандартом Dolby Vision 4K із частотою 60 кадрів/с, а також із Dolby Vision 4K із частотою 120 кадрів/с на найновіших моделях Pro. Викорис­то­вуйте режим «Швидкий рух» для зйомки неперед­бачу­ваних за рухом сцен. За допомогою функції «Аудіомікс» налаштовуйте звучання голосів у відео. Використовуйте функцію «Контролер камери», щоб швидко отримувати доступ до інструментів камери. А з фронтальною камерою Center Stage ви можете викорис­то­вувати функцію «Подвійне захоплення» для одночасної зйомки на фронтальну та задню камери.3',
        image: '/images/iphone/meet-2-3.jpg',
      },
    ],
  },
  {
    id: 'chip',
    eyebrow: 'Чип і робота від акумулятора',
    headline: 'Швидкість триває.',
    image: '/images/iphone/meet_iphone-3.jpg',
    blocks: [
      {
        lead: 'Надрозумний і надшвидкий чіп від Apple.',
        body: 'Чипи A19 і A19 Pro надзвичайно ефективні та забез­печують тривалий час роботи від акуму­лятора. Вони підтримують надсучасні функції фото­зйомки, як‑от Стилі фотографій останнього покоління, та сумісні з AAA‑іграми.',
        image: '/images/iphone/meet-3-1.jpg',
      },
      {
        lead: 'Тривала робота від акумулятора? 100%.',
        body: 'Наші апаратні й програмні засоби створено для ефективної спільної роботи, тому ви можете виконувати більше завдань без підза­ряджання, наприклад відтво­рю­вати відео до 33 годин на iPhone 17 Pro і до 39 годин на iPhone 17 Pro Max.4',
        image: '/images/iphone/meet-3-2.jpg',
      },
      {
        lead: 'Створено для 5G.',
        body: 'iPhone + 5G = надзвичайна швидкість.5 Але якщо ви не потребуєте такої швидкості, iPhone переходить у режим Smart Data, щоб заощадити заряд акумулятора.',
        image: '/images/iphone/meet-3-3.jpg',
      },
      {
        lead: 'Заряджає на повну. Вмить.',
        body: 'Підʼєднайте зарядний пристрій MagSafe для швидшого бездротового заряджання.6 Або скорис­тай­теся адаптером живлення USB‑C. А з портом USB‑C ви можете заряджати свій iPhone за допомогою того самого кабелю, що й Mac та iPad.',
        image: '/images/iphone/meet-3-4.jpg',
      },
    ],
  },
  {
    id: 'ios',
    eyebrow: 'iOS та Apple Intelligence',
    headline: 'Новий вигляд.\nЩе більше магії.',
    subtext: 'Доступно не всіма мовами.',
    image: '/images/iphone/meet_iphone-4.jpg',
    blocks: [
      {
        lead: 'Нечуваний стандарт насолоди.',
        body: 'Новий дизайн Liquid Glass забезпечує приємний і послідовний процес роботи з усіма додатками та пристроями, завдяки якому все, що ви робите, відбувається неначе само собою. Усуньте відво­лі­кання за допомогою інструментів фільтрації в додатках «Телефон», FaceTime і «Повідомлення». А також персо­на­лізуйте чати за допомогою нових фонів.',
        image: '/images/iphone/meet-4-1.jpg',
      },
      {
        lead: 'Ще розумніше.',
        body: 'Наші найновіші моделі iPhone створені для Apple Intelligence7 — персо­наль­ної інте­лекту­аль­ної системи, що допомагає писати, проявляти інди­ві­дуаль­ність і вико­ну­вати зав­дання без зусиль. Використовуйте корисні функції, зокрема «Переклад наживо», в додатках «Повідомлення», FaceTime і «Телефон».8 Ця система вико­рис­то­вує моделі, які працюють повністю на пристрої, тому особисті розмови зали­ша­ються кон­фі­ден­ційними.',
        image: '/images/iphone/meet-4-2.jpg',
      },
      {
        lead: 'Ви можете більше завдяки візуальному інтелекту.9.',
        body: 'Здійснюйте пошук, ставте запитання, додавайте записи в календар і виконуйте такі дії, як розпізнавання рослин або тварин, — тобто робіть більше з інформацією, яка відображається на екрані.',
        image: '/images/iphone/meet-4-3.jpg',
      },
      {
        lead: 'Гумка.10',
        body: 'Прибирайте сторонні елементи зі своїх фотографій за допомогою інструмента «Гумка» в додатку «Фотографії». Гумка використовує Apple Intelligence для визначення фонових об’єктів, щоб ви могли видалити їх одним дотиком і отримати ідеальний знімок, водночас зберігши оригінальне зображення.',
        image: '/images/iphone/meet-4-4.jpg',
      },
      {
        lead: 'iPhone для всіх і кожного.',
        body: 'Інтегровані функції доступності допомагають вам робити те, що ви любите, найзручнішим для вас способом. VoiceOver — це інте­гро­ваний екранний зчитувач, який озвучує те, що ­відо­бра­жа­ється на екрані. Крім того, ви можете керувати iPhone за допомогою жестів, підключеної клавіатури чи брайлівського дисплея.',
        image: '/images/iphone/meet-4-5.jpg',
      },
    ],
  },
  {
    id: 'environment',
    eyebrow: 'Довкілля',
    headline: 'Створений із турботою\nпро довкілля.',
    image: '/images/iphone/meet_iphone-5.png',
    blocks: [
      {
        lead: 'Більше перероблених матеріалів? Цілком природно.',
        body: 'Ми значно розши­рю­ємо вико­рис­тання ключових пере­роб­лених металів в акумуляторах, магнітах і друко­ваних платах iPhone. Наприклад, у наших останніх моделях в катоді акумулятора використовується 95% переробленого літію.11',
        image: '/images/iphone/meet-5-1.jpg',
      },
      {
        lead: 'Планетопозитивне паковання.',
        body: 'Усе паковання iPhone виготовлено з паперу, що на 100% складається з волокон і легко піддається переробленню.',
        image: '/images/iphone/meet-5-2.jpg',
      },
      {
        lead: 'Інновації в турботі про довкілля.',
        body: 'Наші роботи-розбирачі — Дейзі, Дейв і Таз — віднов­люють такі важливі матеріали, як золото, кобальт, вольфрам і рідко­земельні елементи, щоб їх можна було переробити та вико­рис­товувати знову.',
        image: '/images/iphone/meet-5-3.jpg',
      },
      {
        lead: 'На шляху до вуглецевої нейтральності.',
        body: 'Наші магазини, офіси й дата-центри вже стали вуглецево­нейтральними. До 2030 року ми прагнемо досягти нульового рівня викидів вуглецю.',
        image: '/images/iphone/meet-5-4.jpg',
      },
    ],
  },
  {
    id: 'privacy',
    eyebrow: 'Конфіденційність',
    headline: 'Ваші дані.\nТам, де вам потрібно.',
    image: '/images/iphone/meet_iphone-6.jpg',
    blocks: [
      {
        lead: 'Революційний захист конфіденційності.',
        body: 'Завдяки технології «Приватні хмарні обчислення» система може використовувати більші серверні моделі, розроблені Apple, що працюють на основі чипів Apple, для оброблення складніших запитів, захищаючи водночас вашу конфіденційність.',
        image: '/images/iphone/meet-6-1.jpg',
      },
      {
        lead: 'Безпечний вхід.',
        body: 'Додаток «Паролі» полегшує доступ до паролів облікових записів, ключів, паролів Wi‑Fi і кодів дво­фак­торної автен­ти­фікації, які надійно збері­га­ються на вашому пристрої або синхро­ні­зу­ються із В’язкою iCloud.',
        image: '/images/iphone/meet-6-2.jpg',
      },
      {
        lead: 'Захищений перегляд вебсторінок.',
        body: 'Захищений перегляд у Safari блокує вікна перегляду, коли вони не вико­рис­то­вуються, блокує заван­та­ження відомих трекерів на сторінках і видаляє відстеження, додане до URL‑адрес під час перегляду.',
        image: '/images/iphone/meet-6-3.jpg',
      },
      {
        lead: 'Конфіденційне поширення змісту.',
        body: 'Усі повідомлення, які було надіслано через iMessage, вико­рис­то­вують наскрізне шифру­вання між пристроями, тому ці повідомлення бачать лише ті, кому ви їх надсилаєте. Крім того, захист конфі­ден­цій­ності пошти приховує вашу IP‑адресу, тому відправ­ники не можуть визначити ваше місце перебування.',
        image: '/images/iphone/meet-6-4.jpg',
      },
      {
        lead: 'Розрахунок через Apple Pay. .',
        body: 'Під час купівлі за допомогою Apple Pay номери ваших карток не зберігаються ані на вашому пристрої, ані на серверах Apple, а також не передаються продавцям.',
        image: '/images/iphone/meet-6-5.jpg',
      },
    ],
  },
  {
    id: 'safety',
    eyebrow: 'Безпека',
    headline: 'Корисні функції.\nПро всяк випадок.',
    image: '/images/iphone/meet_iphone-7.jpg',
    blocks: [
      {
        lead: 'Для негайної допомоги.',
        body: 'Функція «Виявлення аварій» може виявити серйозну авто­мо­більну аварію та викликати екстрені служби, якщо ви не в змозі. А завдяки функції «Сигнал SOS» iPhone може авто­ма­тично викликати допомогу й повідомити про ваше місце пере­бу­вання в екстрені служби.12',
        image: '/images/iphone/meet-7-1.jpg',
      },
      {
        lead: 'Заспокоєння на щодень.',
        body: 'Через Локатор ви можете безпечно ділитися своїм місцем перебування із друзями та сім’єю. У Повідомленнях можна ско­рис­та­тися функцією «Супровід», щоб авто­ма­тично повідомити когось, що ви безпечно дісталися потрібного місця.',
        image: '/images/iphone/meet-7-2.jpg',
      },
    ],
  },
];

const SCROLL_STEP = 320;

export default function MeetIphone() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, []);

  // Lock body scroll + close on Escape while the modal is open, so the
  // page behind stays completely still and only the modal body scrolls.
  useEffect(() => {
    if (!activeId) return;

    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveId(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeId]);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
  };

  const activeCard = CARDS.find(c => c.id === activeId) ?? null;

  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Познайомтеся з iPhone.</h2>
      </div>

      <ul className={s.track} ref={trackRef} onScroll={updateEdges}>
        {CARDS.map((card, index) => (
          <li key={card.id} className={`${s.card} ${s[`card_${card.id}`]}`}>
            <Image
              src={card.image}
              alt={card.eyebrow}
              fill
              className={`${s.cardImage} ${index === 0 || index === 4 ? s.cardImagePositionDown : ''}`}
              sizes="296px"
            />

            <div className={s.cardTop}>
              <span className={s.eyebrow}>{card.eyebrow}</span>
              <h3 className={s.headline}>
                {card.headline.split('\n').map((line, i) => (
                  <span key={i} className={s.headlineLine}>{line}</span>
                ))}
              </h3>
              {card.subtext && (
                <p className={s.subtext}>
                  {card.subtext}
                </p>
              )}
            </div>

            <button
              type="button"
              className={s.plusButton}
              aria-label={`Дізнатися більше: ${card.eyebrow}`}
              onClick={() => setActiveId(card.id)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className={s.arrows}>
        <button
          type="button"
          className={s.arrow}
          aria-label="Попередній"
          disabled={atStart}
          onClick={() => scroll(-1)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M10 2 4 8l6 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className={s.arrow}
          aria-label="Наступний"
          disabled={atEnd}
          onClick={() => scroll(1)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M6 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {activeCard && (
        <div className={s.backdrop} onClick={() => setActiveId(null)}>
          <div
            className={s.modal}
            role="dialog"
            aria-modal="true"
            aria-label={activeCard.headline.replace('\n', ' ')}
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className={s.closeButton}
              aria-label="Закрити"
              onClick={() => setActiveId(null)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <div className={s.modalHead}>
              <span className={s.modalEyebrow}>{activeCard.eyebrow}</span>
              <h2 className={s.modalHeadline}>
                {activeCard.headline.split('\n').join(' ')}
              </h2>
            </div>

            <div className={s.modalBody}>
              {activeCard.blocks.map((block, i) => (
                <div className={s.modalPanel} key={i}>
                  <p className={s.modalText}>
                    <strong>{block.lead}</strong> {block.body}
                  </p>
                  <div className={s.modalPhotoWrap}>
                    <Image
                      src={block.image}
                      alt={block.lead}
                      width={800}
                      height={480}
                      className={s.modalPhoto}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}