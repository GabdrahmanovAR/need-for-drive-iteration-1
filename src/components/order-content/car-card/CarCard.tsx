import React, { BaseSyntheticEvent, FC } from 'react';
import './CarCard.scss';
import { useDispatch } from 'react-redux';
import { ICarsFakeData } from '../../../constants/fake-data/cars';
import { changeCarInfoAction } from '../../../redux/actions/OrderInfoAction';

interface ICarCardProps {
  id: string,
  carInfo: ICarsFakeData,
  activeCard: string,
}

const CarCard: FC<ICarCardProps> = ({ id, carInfo, activeCard }) => {
  const dispatch = useDispatch();

  const handleCardClick = (event: BaseSyntheticEvent) => {
    dispatch(changeCarInfoAction(carInfo.brand, carInfo.name, carInfo.minPrice, carInfo.maxPrice, carInfo.image, event.currentTarget.id));
  };

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
