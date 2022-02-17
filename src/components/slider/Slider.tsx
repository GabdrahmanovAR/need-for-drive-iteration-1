import React from 'react';
import Button from '../button/Button';
import leftArrowIcon from '../../assets/icons/left-arrow.svg';
import rightArrowIcon from '../../assets/icons/right-arrow.svg';
import './Slider.scss';

const Slider = () => (
  <div className="slider">
    <div className="slider__layer">
      <div className="slider__layer__left-arrow">
        <img src={leftArrowIcon} alt="Arrow icon" />
      </div>
      <section className="slider__layer__block slider-content">
        <main className="slider-content__info">
          <h1 className="slider-content__info__title">Бесплатная парковка</h1>
          <p className="slider-content__info__description">
            Оставляйте машину на платных городских парковках и разрешенных местах,
            не нарушая ПДД, а также в аэропортах.
          </p>
          <Button text="Подробнее" customClass="slider-content__info__button" />
        </main>
        <footer className="slider-content__dots">
          <div className="slider-content__dots_active" />
          <div />
          <div />
          <div />
        </footer>
      </section>
      <div className="slider__layer__right-arrow">
        <img src={rightArrowIcon} alt="Arrow icon" />
      </div>
    </div>
  </div>
);

export default Slider;
