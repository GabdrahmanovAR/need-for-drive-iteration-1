import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RadioButton from '../../radio-button/RadioButton';
import { Cars, ICarsFakeData } from '../../../constants/fake-data/cars';
import CarCard from '../car-card/CarCard';
import './CarsTab.scss';
import { ScrollToTop } from '../../../utils/ScrollToTop';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';

const CarsTab = () => {
  const orderInfoState = useSelector(orderInfoSelector);

  useEffect(() => {
    ScrollToTop();
  }, []);

  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <div className="cars-tab">
      <header className="cars-tab__header">
        <RadioButton
          formName="cars"
          btnNames={['Все модели', 'Эконом', 'Премиум']}
        />
      </header>
      <main className="cars-tab__car-list">
        {Cars.map((carInfo: ICarsFakeData, index: number) => (
          <CarCard
            carInfo={carInfo}
            activeCard={orderInfoState.car.selectedCar}
            id={`model-card-${index}`}
            key={`model-card-${index}`}
          />
        ))}
      </main>
    </div>
  );
};

export default CarsTab;
