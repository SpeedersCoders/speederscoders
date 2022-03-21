import React from 'react';
import HeroSec from './HeroSec';
import YouTube from './YouTube';
import Page from '../../Components/Page';

const Home = () => {
  return (
    <Page title="Home">
      <HeroSec />
      <YouTube />
    </Page>
  );
};

export default Home;
