import React from 'react';
import MainContent from '../../components/main-content/MainContent';
import Slider from '../../components/slider/Slider';
import './MainPage.scss';

const MainPage = () => (
  <div className="main-page">
    <main className="main-page__content">
      <MainContent />
    </main>
    <section className="main-page__slider">
      <Slider />
    </section>
  </div>
);

export default MainPage;
