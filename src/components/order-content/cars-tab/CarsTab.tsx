import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RadioButton from '../../radio-button/RadioButton';
import CarCard from '../car-card/CarCard';
import './CarsTab.scss';
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

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (carsDataState.data.length === 0 && fetching) {
      dispatch(getCarsAction('0', '10'));
      setFetching(false);
    } else if (fetching && carsDataState.data.length < carsDataState.count) {
      dispatch(getCarsAction(page.toString(), '10'));
      setPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [fetching]);

  const handleCarsScroll = (event: any) => {
    if (event.target.scrollHeight - event.target.scrollTop < event.target.clientHeight) {
      setFetching(true);
    }
  };

  return (
    <div className="cars-tab" onScroll={handleCarsScroll}>
      <header className="cars-tab__header">
        <RadioButton
          formName="cars"
          btnNames={['Все модели', 'Эконом', 'Премиум']}
        />
      </header>
      <main className="cars-tab__car-list">
        {carsDataState.data.map((carInfo: ICarInfoData, index: number) => (
          <CarCard
            carInfo={carInfo}
            activeCard={orderInfoState.car.selectedCar}
            id={`model-card-${index}`}
            key={`model-card-${index}`}
          />
        ))}
        <div className={`cars-tab__spinner ${carsDataState.isLoading && 'cars-tab__spinner_visible'}`}>
          <Spinner customClass="cars-tab__spinner_black" />
        </div>
      </main>
      {!orderStepState.locationTabCompleted && path('/order/location')}
    </div>
  );
};

export default CarsTab;
