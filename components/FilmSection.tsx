// 'use client';

// import { useEffect, useRef, type CSSProperties } from 'react';
// import s from './FilmSection.module.css';

// type FeatureCopy = {
//   num: string;
//   title: React.ReactNode;
//   body: string;
//   stats: { big: string; lab: string }[];
//   align: 'right' | 'left';
//   /** scroll offset within the 500vh section where the panel docks */
//   at: string;
// };

// const FEATURES: FeatureCopy[] = [
//   {
//     num: '01 / 04',
//     title: (
//       <>
//         The <em>brain.</em>
//       </>
//     ),
//     body:
//       'A19 Pro is built on a second-generation 3-nanometer process — the most advanced silicon ever in a phone. Its Neural Engine runs frontier AI models on-device, no cloud required.',
//     stats: [
//       { big: '6', lab: 'CPU cores' },
//       { big: '16', lab: 'Neural Engine' },
//       { big: '3 nm', lab: 'process' },
//     ],
//     align: 'right',
//     at: '120vh',
//   },
//   {
//     num: '02 / 04',
//     title: (
//       <>
//         Three eyes. <em>One vision.</em>
//       </>
//     ),
//     body:
//       'A 48 MP Fusion main, 48 MP Ultrawide, and a tetraprism telephoto with 8× optical-quality reach. Together they capture the kind of light most cameras only dream about.',
//     stats: [
//       { big: '48 MP', lab: 'fusion main' },
//       { big: '8×', lab: 'telephoto' },
//       { big: '200 mm', lab: 'reach' },
//     ],
//     align: 'left',
//     at: '220vh',
//   },
//   {
//     num: '03 / 04',
//     title: (
//       <>
//         A screen <em>worth looking at.</em>
//       </>
//     ),
//     body:
//       '6.3-inch Super Retina XDR with ProMotion. The brightest iPhone display ever — readable in direct sunlight, dimmable down to a single nit at night.',
//     stats: [
//       { big: '6.3″', lab: 'OLED' },
//       { big: '3,000', lab: 'nits peak' },
//       { big: '120 Hz', lab: 'ProMotion' },
//     ],
//     align: 'right',
//     at: '320vh',
//   },
//   {
//     num: '04 / 04',
//     title: (
//       <>
//         All day. <em>And beyond.</em>
//       </>
//     ),
//     body:
//       'Up to 35 hours of video playback. A laser-welded vapor chamber pulls heat off the A19 Pro so it sustains peak performance longer than any iPhone before it.',
//     stats: [
//       { big: '35 hrs', lab: 'video' },
//       { big: '40 W', lab: 'USB-C' },
//       { big: '30 W', lab: 'MagSafe' },
//     ],
//     align: 'left',
//     at: '420vh',
//   },
// ];

// export default function FilmSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const featureRefs = useRef<(HTMLElement | null)[]>([]);

//   // Reveal panels as they enter the viewport.
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       (entries) => {
//         for (const e of entries) {
//           if (e.isIntersecting) e.target.classList.add(s.in);
//         }
//       },
//       { threshold: 0.25 },
//     );
//     for (const el of featureRefs.current) {
//       if (el) io.observe(el);
//     }
//     return () => io.disconnect();
//   }, []);

  // Playback strategy:
  //   - Desktop (>900px): scroll-scrubbed (currentTime tracks scroll progress).
  //   - Mobile (≤900px):  autoplay loop, since the section is no longer
  //     500vh tall and there's no sticky pin to scrub against.
//   useEffect(() => {
//     const section = sectionRef.current;
//     const video = videoRef.current;
//     if (!section || !video) return;

//     const isMobile =
//       typeof window !== 'undefined' &&
//       window.matchMedia('(max-width: 900px)').matches;

//     if (isMobile) {
//       video.loop = true;
//       video.muted = true;
//       // Best-effort autoplay; some browsers refuse without an interaction.
//       video.play().catch(() => {});
//       return;
//     }

//     video.pause();

//     let rafPending = false;
//     let knownDuration = 0;

//     const applyScrub = () => {
//       rafPending = false;
//       const dur = knownDuration || video.duration;
//       if (!dur || !isFinite(dur)) return;

//       const rect = section.getBoundingClientRect();
//       const scrollable = section.offsetHeight - window.innerHeight;
//       if (scrollable <= 0) return;
//       const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
//       const target = progress * dur;

//       // Skip sub-frame deltas — they cause Safari jitter without visible benefit.
//       if (Math.abs(video.currentTime - target) > 0.04) {
//         try {
//           video.currentTime = target;
//         } catch {
//           /* seek may throw before metadata is ready */
//         }
//       }
//     };

//     const onScroll = () => {
//       if (!rafPending) {
//         rafPending = true;
//         requestAnimationFrame(applyScrub);
//       }
//     };

//     const onMetadata = () => {
//       knownDuration = video.duration;
//       applyScrub();
//     };

//     video.addEventListener('loadedmetadata', onMetadata);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onScroll, { passive: true });

//     return () => {
//       video.removeEventListener('loadedmetadata', onMetadata);
//       window.removeEventListener('scroll', onScroll);
//       window.removeEventListener('resize', onScroll);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={s.section}
//       aria-label="iPhone 17 Pro film"
//     >
//       <div className={s.pin}>
//         <video
//           ref={videoRef}
//           className={s.film}
//           muted
//           playsInline
//           preload="auto"
//           poster="/media/hero-poster.jpg"
//           aria-hidden="true"
//           disablePictureInPicture
//           disableRemotePlayback
//         >
//           <source src="/media/hero-loop.mp4" type="video/mp4" />
//         </video>
//         <div className={s.poster} role="img" aria-label="iPhone 17 Pro" />
//       </div>

//       <div className={s.features}>
//         {FEATURES.map((f, i) => (
//           <article
//             key={f.num}
//             ref={(el) => {
//               featureRefs.current[i] = el;
//             }}
//             className={`${s.feature} ${f.align === 'right' ? s.alignRight : s.alignLeft}`}
//             style={{ '--at': f.at } as CSSProperties}
//           >
//             <div className={s.featMeta}>
//               <span className={s.featNum}>{f.num}</span>
//             </div>
//             <h3 className={s.featTitle}>{f.title}</h3>
//             <p className={s.featBody}>{f.body}</p>
//             <div className={s.featStats}>
//               {f.stats.map((stat, j) => (
//                 <div key={j}>
//                   <span className={s.big}>{stat.big}</span>
//                   <span className={s.lab}>{stat.lab}</span>
//                 </div>
//               ))}
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
