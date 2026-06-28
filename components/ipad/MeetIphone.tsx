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
    eyebrow: 'iPadOS і додатки',
    headline: 'Гнучка система вікон.\nРобіть усе й одразу.',
    image: '/images/iPhone/meet_iphone-1.jpg',
    blocks: [
      {
        lead: 'Усе починається з дотику.',
        body: 'iPadOS, яка створена для великого дисплея Multi‑Touch, пропонує революційні можливості, що роблять iPad неймовірно потужним і простим у вико­рис­танні. З дизайном Liquid Glass усе, що ви бачите й чого торкаєтеся, неймовірно яскраве та приємне оку.',
        image: '/images/ipad/ipad_dotyk.jpg',
      },
      {
        lead: 'Мультизадачність — це просто.',
        body: 'Інтуїтивно зрозуміла й гнучка система вікон дає змогу легко керувати всіма додатками й перемикатися між ними так, як вам зручно. Відкривайте кілька вікон одночасно, змінюйте їх розмір і розташування відповідно до потреб робочого процесу.',
        image: '/images/ipad/ipad_multi.jpg',
      },
      {
        lead: 'Понад мільйон захопливих можливостей.',
        body: 'Додатки з App Store перетворюють iPad на навчальну аудиторію, робочу станцію, професійну студію звукозапису або будь‑що інше. Серед понад мільйона додатків, розроблених для iPad, ви точно знайдете той, що підійде саме вам.',
        image: '/images/ipad/ipad_moznosti.jpg',
      },
    ],
  },
  {
    id: 'camera',
    eyebrow: 'Продуктивність',
    headline: 'Офіс може бути \nде завгодно.',
    image: '/images/iphone/meet_iphone-2.jpg',
    blocks: [
      {
        lead: 'Універсальність як стандарт.',
        body: 'Працювати з iPad — саме задоволення. Підтримка Multi‑Touch дає змогу швидко й легко виконувати навігацію простими жестами. Додайте Apple Pencil, щоб занотувати чи замалювати свої ідеї. Або приєднайте клавіатуру, щоб миттю відповісти на електронні листи.Footnote 11 Все це завдяки неймовірно потужному чипу Apple.',
        image: '/images/ipad/ipad_universal.jpg',
      },
      {
        lead: 'Працюйте будь‑де.',
        body: 'Спілкуйтеся з близькими, друзями й колегами, хоч би де ви були. Завдяки швидкому Wi‑Fi можна заван­та­жу­вати й передавати всі потрібні документи, папки та файли звідусіль. А з 5G ви залишати­метеся на звʼязку навіть без підключення до Wi‑Fi.Footnote 22.',
        image: '/images/ipad/ipad_bud_de.jpg',
      },
      {
        lead: 'Усе в одному місці. Знайти потрібне легко.',
        body: 'Впорядковуйте, діліться та переглядайте будь‑які матеріали в додатку «Файли». Легко знаходьте й керуйте всім, що зберігається у вас на iPad, в iCloud і хмарних сервісах, як‑от Box.',
        image: '/images/ipad/ipad_v_dnom.jpg',
      },
    ],
  },
  {
    id: 'chip',
    eyebrow: 'Творчість',
    headline: 'Дайте волю уяві.',
    image: '/images/iphone/meet_iphone-3.jpg',
    blocks: [
      {
        lead: 'Ще більше місця для ідей',
        body: 'Імерсивний сенсорний екран iPad — це полотно для найсміливіших проявів вашої творчості. Створюйте анімації у FlipaClip, робіть ескізи для нових ідей у Нотатках або малюйте справжні шедеври в Procreate — з iPad оживають ваші найкреативніші ідеї.',
        image: '/images/ipad/ipad_idei.jpg',
      },
      {
        lead: 'Apple Pencil. Створений творити.',
        body: 'З Apple Pencil ви можете легко малювати аквареллю в Adobe Fresco чи робити архітектурні креслення в SketchUp.Footnote 11',
        image: '/images/ipad/ipad_apple_pencil.jpg',
      },
      {
        lead: 'Робіть найкращі фото. І відео.',
        body: 'Завдяки потужним камерам на передній і задній панелях iPad ви можете знімати відео, робити знімки високої якості чи створювати інший чудовий контент. У додатках, як‑от Final Cut Pro та Adobe Lightroom, можна знімати, редагувати, а потім ділитися контентом — і все це на одному портативному пристрої.',
        image: '/images/ipad/ipad_best_fotos.jpg',
      }
    ],
  },
  {
    id: 'ios',
    eyebrow: 'Навчання',
    headline: 'Візьміть класс із собою.',
    image: '/images/iphone/meet_iphone-4.jpg',
    blocks: [
      {
        lead: 'Навчання без перешкод.',
        body: 'Інтегровані камери, швидкісний Wi‑Fi та мобільний звʼязок — усе, що потрібно для безпе­реш­код­ного спіл­ку­вання на відстані. Навчайтеся онлайн, відвідуйте лекції в Zoom, працюйте над спільним проєктом у FaceTime або просто залишайтеся на звʼязку з колегами й однокласниками де завгодно.',
        image: '/images/ipad/ipad_study.jpg',
      },
      {
        lead: 'Першокласні аксесуари.',
        body: 'Робити нотатки та працювати над проєктами ще зручніше з аксе­суа­рами, ство­ре­ними спеціально для iPad.Footnote 11 З Apple Pencil можна писати цифрові конспекти від руки чи підʼєднати клавіатуру, щоб швидше відповісти на електронний лист або створити презентацію.',
        image: '/images/ipad/ipad_accesuar.jpg',
      },
      {
        lead: 'Додатки для досліджень і відкриттів.',
        body: 'iPad — ідеальний помічник у навчанні. Ви можете вчитися готувати з покроковими рецептами в Kitchen Stories або досліджувати навколишній світ. Для кожного завдання та підходу знайдеться додаток, зокрема й з підтримкою доповненої реальності.',
        image: '/images/ipad/ipad_learning.jpg',
      }
    ],
  },
  {
    id: 'environment',
    eyebrow: 'Дозвілля',
    headline: 'Дивіться.Грайте.\nВідпочивайте.',
    image: '/images/iphone/meet_iphone-5.png',
    blocks: [
      {
        lead: 'Візьміть улюблений контент із собою.',
        body: 'З iPad у вас завжди є доступ до улюблених фільмів, серіалів, книг і музики, хоч би де ви будете.',
        image: '/images/ipad/ipad_watching_game.jpg',
      },
      {
        lead: 'Домашній кінотеатр у ваших руках.',
        body: 'Завдяки дивовижному дисплею, чудовим динамікам і передовим технологіям, як‑от ProMotion, увесь ваш контент вражає зобра­женням і звуком.Footnote 33',
        image: '/images/ipad/ipad_kino.jpg',
      },
      {
        lead: 'А ще це ігровий майданчик.',
        body: 'Завдяки потужному чипу Apple у поєднанні з неймовірним дисплеєм iPad дає змогу повністю зануритися у гру. Додайте клавіатуру чи мишу — і ви вже на новому рівні. Ви навіть можете підʼєд­нати без­дро­товий контролер, щоб корис­ту­ва­тися пристроєм як пор­та­тивною консоллю.Footnote 11',
        image: '/images/ipad/ipad_potuz.jpg',
      }
    ],
  },
  {
    id: 'privacy',
    eyebrow: 'Apple Pencil',
    headline: 'Є ідея? Запишіть.',
    image: '/images/iphone/meet_iphone-6.jpg',
    blocks: [
      {
        lead: 'З Apple Pencil пишіть, малюйте і нотуйте як ніколи раніше.',
        body: 'Ведіть щоденник, швидко складайте список продуктів і робіть конспекти своїх занять. На iPad легко записати усе, що спаде на думку.',
        image: '/images/ipad/ipad_pencil.jpg',
      },
      {
        lead: 'Запрошуємо усіх митців.',
        body: 'Створюєте щось прекрасне в Procreate, ретушуєте фотографії в Adobe Photoshop чи робите замальовки архітектури в Morpholio Trace? Apple Pencil допоможе втілити ваші творчі ідеї в життя з неймовірною точністю.',
        image: '/images/ipad/ipad_mitci.jpg',
      },
      {
        lead: 'Функції для роботи з насолодою.',
        body: 'Користуватися Apple Pencil з iPadOS так само зручно, як писати ручкою на папері. Ви можете легко підписувати документи, робити позначки на знімках екрана, а також додавати коментарі до додатків у швидких нотатках.',
        image: '/images/ipad/ipad_nasoloda.jpg',
      }
    ],
  },
  {
    id: 'safety',
    eyebrow: 'Створенний для Apple intelligence',
    headline: 'Просто корисна.\nЩодня.',
    subtext: 'Доступно не всіма мовами.',
    image: '/images/iphone/meet_iphone-7.jpg',
    blocks: [
      {
        lead: 'Геніальність на дотик.',
        body: 'Останні моделі iPad Pro, iPad Air та iPad mini створені для Apple Intelligence, що допомагає писати, проявляти індивідуальність і виконувати завдання без зусиль.Footnote 44 Pеволюційні засоби захисту конфіденційності надають упевненості, що ніхто не матиме доступу до ваших даних — навіть Apple.',
        image: '/images/ipad/ipad_genialny.jpg',
      },
      {
        lead: 'Спілкуйтеся різними мовами.',
        body: 'Увімкніть Live Translation, щоб авто­матично перекладати тексти в Повідомленнях,Footnote 55 пере­гля­дати пере­кладені субтитри розмов наживо у FaceTime та отримувати усні переклади викликів у додатку «Телефон».Footnote 66',
        image: '/images/ipad/ipad_rozny_movy.jpg',
      },
      {
        lead: 'Висловлюйтеся візуально.',
        body: 'Перетворюйте ескіз на повʼязане зображення, що доповнює ваші нотатки, за допомогою засобу Чарівний пензлик. Створюйте Genmoji для будь‑якої розмови просто на клавіатурі тощо.',
        image: '/images/ipad/ipad_vizualno.jpg',
      },
      {
        lead: 'Початок нової ери для Siri.',
        body: 'З новим дизайном, глибшим розу­мінням мови та все­біч­ними знаннями про ваші пристрої Siri стає ще корис­нішою, ніж будь‑коли раніше.',
        image: '/images/ipad/ipad_siri.jpg',
      },
      {
        lead: 'Захист даних на кожному кроці.',
        body: 'Завдяки технології «Приватні хмарні обчислення» система може використовувати більші серверні моделі, розроблені Apple, що працюють на основі чипів Apple, для оброблення складніших запитів, захищаючи водночас вашу конфіденційність.',
        image: '/images/ipad/ipad_krok.jpg',
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
        <h2 className={s.heading}>Познайомтеся з iPad.</h2>
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