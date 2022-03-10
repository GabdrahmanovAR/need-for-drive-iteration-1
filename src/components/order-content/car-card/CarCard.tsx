import React, { BaseSyntheticEvent, FC, useEffect } from 'react';
import './CarCard.scss';
import { useDispatch } from 'react-redux';
import { changeActiveCardAction, changeSelectedCarInfoAction } from '../../../redux/actions/CarModelCardAction';
import { ICars } from '../../../constants/fake-data/cars';

interface ICarCardProps {
  id: string,
  carInfo: ICars,
  activeCard: string,
}

const CarCard: FC<ICarCardProps> = ({ id, carInfo, activeCard }) => {
  const dispatch = useDispatch();

  const handleCardClick = (event: BaseSyntheticEvent) => {
    dispatch(changeActiveCardAction(event.currentTarget.id));
  };

  useEffect(() => {
    if (activeCard === id) {
      dispatch(changeSelectedCarInfoAction(carInfo));
    }
  }, [activeCard]);

  return (
    <section
      className={`car-info ${activeCard === id && 'car-info_active'}`}
      onClick={handleCardClick}
      role="presentation"
      id={id}
    >
      <header className="car-info__header">
        <h3 className="car-info__header__title">{carInfo.name}</h3>
        <span className="car-info__header__description">{`${carInfo.minPrice} - ${carInfo.maxPrice} ₽`}</span>
      </header>
      <div className="car-info__car-image">
        <img src={carInfo.image} alt="Car Model" />
      </div>
    </section>
  );
};

export default CarCard;
