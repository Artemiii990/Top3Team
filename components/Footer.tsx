import s from './Footer.module.css';

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: 'Продукти',
    links: ['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV', 'AirTag'],
  },
  {
    heading: 'Обліковий запис',
    links: ['Керування обліковим записом Apple', 'iCloud.com']
  },
  {
    heading: 'Сервіси',
    links: ['Apple One', 'Apple TV', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store'],
  },
  {
    heading: 'Для бізнесу',
    links: ['Apple і бізнес']
  },
  {
    heading: 'Цінності Apple',
    links: ['Доступність', 'Довкілля', 'Конфіденційність']
  },
  {
    heading: 'Про компанію Apple',
    links: ['Вакансії', 'Інвесторам', 'Етика й відповідність'],
  },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      {/* примітки зверху футера */}
      <div className={s.notes}>
        <p>Для користування Apple TV потрібна передплата.</p>
        <p>Функції можуть змінюватися. Деякі функції, додатки і сервіси доступні не всіма мовами та не в усіх регіонах.</p>
      </div>

      <div className={s.links}>

        {/* Column 1 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[0].heading}</h6>
            {COLUMNS[0].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>

        {/* Column 2 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[1].heading}</h6>
            {COLUMNS[1].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[2].heading}</h6>
            {COLUMNS[2].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>

        {/* Column 3 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[3].heading}</h6>
            {COLUMNS[3].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>

        {/* Column 4 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[4].heading}</h6>
            {COLUMNS[4].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[5].heading}</h6>
            {COLUMNS[5].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>
      </div>

      <div className={s.partnerText}>
        <a href='#'>Знайти поруч</a> магазин офіційного партнера.
      </div>
        
      <div className={s.copyrightBlock}>
        <div className={s.copyrightText}>
          © 2026 Apple Inc. Усі права застережено.
        </div>
        <div className={s.copyrightLinks}>
          <a href='#'>Політика конфіденційності</a>
          <a href='#'>Юридична інформація</a>
          <a href='#'>Карта сайту</a>
          <a href='#' className={s.langLink}>Україна</a>
        </div>
      </div>
    </footer>
  );
}
