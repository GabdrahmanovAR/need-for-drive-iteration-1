import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RadioButton from '../../radio-button/RadioButton';
import { Cars, ICars } from '../../../constants/fake-data/cars';
import CarCard from '../car-card/CarCard';
import './CarsTab.scss';
import { carCardSelector } from '../../../selectors/carCardSelector';
import { ScrollToTop } from '../../../utils/ScrollToTop';

const CarsTab = () => {
  const carCardState = useSelector(carCardSelector);

  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <div className="cars-tab">
      <header className="cars-tab__header">
        <RadioButton btnNames={['Все модели', 'Эконом', 'Премиум']} />
      </header>
      <main className="cars-tab__car-list">
        {Cars.map((carInfo: ICars, index: number) => (
          <CarCard
            carInfo={carInfo}
            activeCard={carCardState.activeCard}
            id={`model-card-${index}`}
            key={`model-card-${index}`}
          />
        ))}
      </main>
    </div>
  );
};

export default CarsTab;
