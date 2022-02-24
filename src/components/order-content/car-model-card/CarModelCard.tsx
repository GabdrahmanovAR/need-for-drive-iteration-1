import React from 'react';
import './CarModelCard.scss';

interface IProps {
  carName: string,
  minPrice: string,
  maxPrice: string,
  carImage: string,
}

const CarModelCard = ({
  carName, minPrice, maxPrice, carImage,
}: IProps) => (
  <section className="car-info">
    <header className="car-info__header">
      <h3 className="car-info__header__title">{carName}</h3>
      <span className="car-info__header__description">{`${minPrice} - ${maxPrice} ₽`}</span>
    </header>
    <div className="car-info__car-image">
      <img src={carImage} alt="Car Model" />
    </div>
  </section>
);

export default CarModelCard;
