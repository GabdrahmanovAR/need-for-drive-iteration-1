import React from 'react';
import RadioButton from '../../radio-button/RadioButton';
import { Cars, ICars } from '../../../constants/fake-data/cars';
import CarModelCard from '../car-model-card/CarModelCard';
import './CarModels.scss';

const CarModels = () => (
  <div className="car-models">
    <header className="car-models__header">
      <RadioButton btnNames={['Все модели', 'Эконом', 'Премиум']} />
    </header>
    <main className="car-models__car-list">
      {Cars.map((carInfo: ICars) => (
        <CarModelCard
          carName={carInfo.name}
          minPrice={carInfo.minPrice}
          maxPrice={carInfo.maxPrice}
          carImage={carInfo.image}
        />
      ))}
    </main>
  </div>
);

export default CarModels;
