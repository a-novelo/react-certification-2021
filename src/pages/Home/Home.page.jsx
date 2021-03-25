import React, { useRef } from 'react';
import { Header, HomeView } from '../../components';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Header />
      <HomeView />
    </section>
  );
}

export default HomePage;
