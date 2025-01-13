import Header from '@/app/components/sections/Header'
import Hero from './components/sections/Hero';
import HomeProjects from './components/sections/HomeProjects';
import HomeAbout from './components/sections/HomeAbout';
import MusicPlayer from './components/MusicPlayer';

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <HomeProjects/>
      <MusicPlayer/>
<footer>
      <HomeAbout/>
      </footer>
    </main>
  );
}
