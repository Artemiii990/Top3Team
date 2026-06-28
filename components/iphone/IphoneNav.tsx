import s from './iPhoneNav.module.css';

export default function IPhoneNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>iPhone</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про iPhone</p>

            <a href="#">Переглянути всі моделі iPhone</a>
            <a href="#">iPhone 17 Pro</a>
            <a href="#">iPhone Air</a>
            <a href="#">iPhone 17</a>
            <a href="#">iPhone 17e</a>
            <a href="#">iPhone 16</a>

            <a className={s.small} href="#">
              Порівняння моделей iPhone
            </a>
          </div>

          <div className={s.right}>
            <p>Більше від iPhone</p>

            <a href="#">Підтримка iPhone</a>
          </div>
        </div>
      </div>
    </section>
  );
}