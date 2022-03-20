import React from 'react';
import HeroSec from './HeroSec';
import Features from './Features';
import Page from '../../Components/Page';

const Home = () => {
  return (
    <Page title="Home">
      <HeroSec />
      <Features />
    </Page>
  );
};

export default Home;
