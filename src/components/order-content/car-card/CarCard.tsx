import React, { BaseSyntheticEvent, useEffect } from 'react';
import './CarCard.scss';
import { useDispatch } from 'react-redux';
import { changeActiveCardAction, changeSelectedCarInfoAction } from '../../../redux/actions/CarModelCardAction';
import { ICars } from '../../../constants/fake-data/cars';

interface IProps {
  id: string,
  carInfo: ICars,
  activeCard: string,
}

const CarCard = ({ id, carInfo, activeCard }: IProps) => {
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
      className={`car-card ${activeCard === id && 'car-card_active'}`}
      onClick={handleCardClick}
      role="presentation"
      id={id}
    >
      <header className="car-card__header">
        <h3 className="car-card__header__title">{carInfo.name}</h3>
        <span className="car-card__header__description">{`${carInfo.minPrice} - ${carInfo.maxPrice} ₽`}</span>
      </header>
      <div className="car-card__car-image">
        <img src={carInfo.image} alt="Car Model" />
      </div>
    </section>
  );
};

export default CarCard;
