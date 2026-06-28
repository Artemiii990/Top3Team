import Nav from '@/components/mac/Nav';
import Hero from '@/components/mac/Hero';
import Footer from '@/components/mac/Footer';
import Lineup from '@/components/mac/Lineup';
import MeetIphone from '@/components/mac/MeetIphone';
import Essentials from '@/components/mac/Essentials';
import FamilyTies from '@/components/mac/FamilyTies';
import IPhoneNav from '@/components/mac/IphoneNav';

export default function IphonePage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '92px' }}>
        <Hero />
        <Lineup />
        <MeetIphone />
        <Essentials />
        <FamilyTies />
        <IPhoneNav />
      </main>

      <Footer />
    </>
  );
}