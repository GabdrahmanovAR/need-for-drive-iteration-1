import React, { BaseSyntheticEvent, FC } from 'react';
import './CarCard.scss';
import { useDispatch } from 'react-redux';
import carPicture from '../../../assets/images/car-picture.png';
import { changeCarInfoAction } from '../../../redux/actions/OrderInfoAction';
import { ICarInfoData } from '../../../types/api';

interface ICarCardProps {
  id: string,
  carInfo: ICarInfoData,
  activeCard: string,
}

const CarCard: FC<ICarCardProps> = ({ id, carInfo, activeCard }) => {
  const dispatch = useDispatch();
  const regex = new RegExp(/^(data:image\/)(jpeg|png);base64/);

  const handleCardClick = (event: BaseSyntheticEvent) => {
    dispatch(changeCarInfoAction(
      carInfo.name,
      carInfo.priceMin.toString(),
      carInfo.priceMax.toString(),
      carInfo.thumbnail.path,
      carInfo.colors,
      event.currentTarget.id,
    ));
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
        <span className="car-card__header__description">{`${carInfo.priceMin} - ${carInfo.priceMax} ₽`}</span>
      </header>
      <div className="car-card__car-image">
        <img
          src={regex.exec(carInfo.thumbnail.path)
            ? carInfo.thumbnail.path
            : carPicture}
          alt="Car Model"
        />
      </div>
    </section>
  );
};

export default CarCard;
