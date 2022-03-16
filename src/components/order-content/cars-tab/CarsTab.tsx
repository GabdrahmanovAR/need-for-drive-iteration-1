import React from 'react';
import { useSelector } from 'react-redux';
import RadioButton from '../../radio-button/RadioButton';
import { Cars, ICars } from '../../../constants/fake-data/cars';
import CarCard from '../car-card/CarCard';
import './CarsTab.scss';
import { carCardSelector } from '../../../selectors/carCardSelector';

const CarsTab = () => {
  const state = useSelector(carCardSelector);

  return (
    <div className="cars-tab">
      <header className="cars-tab__header">
        <RadioButton btnNames={['Все модели', 'Эконом', 'Премиум']} />
      </header>
      <main className="cars-tab__car-list">
        {Cars.map((carInfo: ICars, index: number) => (
          <CarCard
            carInfo={carInfo}
            activeCard={state.activeCard}
            id={`model-card-${index}`}
            key={`model-card-${index}`}
          />
        ))}
      </main>
    </div>
  );
};

export default CarsTab;
