import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RadioButton from '../../radio-button/RadioButton';
import CarCard from '../car-card/CarCard';
import './CarsTab.scss';
import { ScrollToTop } from '../../../utils/ScrollToTop';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';
import { orderStepSelector } from '../../../selectors/orderStepSelector';
import { carsDataSelector } from '../../../selectors/carsDataSelector';
import { getCarsAction } from '../../../redux/actions/CarsDataAction';
import { ICarInfoData } from '../../../types/api';
import Spinner from '../../Spinner/Spinner';

const CarsTab = () => {
  const orderInfoState = useSelector(orderInfoSelector);
  const orderStepState = useSelector(orderStepSelector);
  const carsDataState = useSelector(carsDataSelector);
  const path = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    ScrollToTop();
    if (carsDataState.data.length === 0) dispatch(getCarsAction('0', '20'));
  }, []);

  return (
    <div className="cars-tab">
      <header className="cars-tab__header">
        <RadioButton
          formName="cars"
          btnNames={['Все модели', 'Эконом', 'Премиум']}
        />
      </header>
      {carsDataState.isLoading
        ? <Spinner customClass="cars-tab__spinner" />
        : (
          <main className="cars-tab__car-list">
            {carsDataState.data.map((carInfo: ICarInfoData, index: number) => (
              <CarCard
                carInfo={carInfo}
                activeCard={orderInfoState.car.selectedCar}
                id={`model-card-${index}`}
                key={`model-card-${index}`}
              />
            ))}
          </main>
        )}
      {!orderStepState.locationTabCompleted && path('/order/location')}
    </div>
  );
};

export default CarsTab;
