import s from './ColorSection.module.css';

const COLORS: { id: 'silver' | 'orange' | 'blue'; name: string }[] = [
  { id: 'silver', name: 'Silver' },
  { id: 'orange', name: 'Cosmic Orange' },
  { id: 'blue', name: 'Deep Blue' },
];

export default function ColorSection() {
  return (
    <section className={s.section} aria-label="iPhone 17 Pro colors">
      <div className={s.head}>
        <h2 className={s.heading}>Each its own mood.</h2>
      </div>

      <div className={s.chips}>
        {COLORS.map((c) => (
          <div key={c.id} className={s.chip} data-color={c.id}>
            <span className={s.dot} aria-hidden="true" />
            {c.name}
          </div>
        ))}
      </div>

      <div className={s.film}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/colors-poster.jpg"
          aria-hidden="true"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/media/colors-loop.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
