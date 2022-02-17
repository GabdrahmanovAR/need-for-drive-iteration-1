import React from 'react';
import './MainContent.scss';
import locationIcon from '../../assets/icons/location-icon.svg';
import Button from '../button/Button';

const MainContent = () => (
  <div className="content">
    <header className="content__header">
      <h1>Need for drive</h1>
      <section className="content__location">
        <img src={locationIcon} alt="Location icon" />
        <span>Ульяновск</span>
      </section>
    </header>
    <main className="content__info">
      <h1>Каршеринг</h1>
      <h1>Need for drive</h1>
      <p>Поминутная аренда авто твоего города</p>
      <Button text="Забронировать" customClass="content__info__button" />
    </main>
    <footer className="content__footer">
      <span>© 2016-2019 «Need for drive»</span>
      <span>8 (495) 234-22-44</span>
    </footer>
  </div>
);

export default MainContent;
