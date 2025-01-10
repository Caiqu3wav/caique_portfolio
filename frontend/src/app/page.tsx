import Header from '@/app/components/sections/Header'
import Hero from './components/sections/Hero';
import HomeProjects from './components/sections/HomeProjects';
import HomeAbout from './components/sections/HomeAbout';

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <HomeProjects/>
      <HomeAbout/>
    </main>
  );
}
