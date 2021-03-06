import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Header, HomeView } from '../../components';
import './Home.styles.css';

function HomePage() {
  const location = useLocation();
  const sectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('wizeline');

  useEffect(() => {
    if (location && location.state && location.state.search) {
      console.log('ANOVELO - setting this');
      setSearchTerm(location.state.search);
    }
  }, [location]);

  return (
    <section className="homepage" ref={sectionRef}>
      <Header search={setSearchTerm} />
      <HomeView search={searchTerm} />
    </section>
  );
}

export default HomePage;
