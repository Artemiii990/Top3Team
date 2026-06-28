import Nav from '@/components/ipad/Nav';
import Hero from '@/components/ipad/Hero';
import Footer from '@/components/ipad/Footer';
import Lineup from '@/components/ipad/Lineup';
import MeetIphone from '@/components/ipad/MeetIphone';
import Essentials from '@/components/ipad/Essentials';
import FamilyTies from '@/components/ipad/FamilyTies';
import IPhoneNav from '@/components/ipad/IphoneNav';

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