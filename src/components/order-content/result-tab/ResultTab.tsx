import React, { useEffect } from 'react';
import './ResultTab.scss';
import { Cars } from '../../../constants/fake-data/cars';
import { ScrollToTop } from '../../../utils/ScrollToTop';

const ResultTab = () => {
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <div className="result-tab">
      <section className="result-tab__car-info">
        <h2>Hyndai, I30 N</h2>
        <div className="result-tab__car-info__number">К 761 НА 73</div>
        <div>
          <span>Топливо </span>
          <span>100%</span>
        </div>
        <div>
          <span>Доступна с </span>
          <span>12.06.2019 12:00</span>
        </div>
      </section>
      <section className="result-tab__car-img">
        <img src={Cars[0].image} alt="Car Model" />
      </section>
    </div>
  );
};

export default ResultTab;
