import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EMPTY_STRING } from '../../../constants/common';
import deleteIcon from '../../../assets/icons/delete-city.svg';
import './OrderLocation.scss';
import YandexMaps from '../../yandex-maps/YandexMaps';
import { ICity, listOfCities } from '../../../constants/cities';
import { IState } from '../../../types/state';
import { changeLocationDataAction } from '../../../redux/actions/OrderLocationAction';

interface IProps {
  markerName: string,
  changeLocationData: (name: string, coords: number[], key: string) => void,
}

const OrderLocation = ({ markerName, changeLocationData }: IProps) => {
  const [city, setCity] = useState(EMPTY_STRING);
  const [navActive, setNavActive] = useState(false);
  const cyrillicRegexp = new RegExp(/^[А-я]*$/);

  useEffect(() => {
    if (city !== EMPTY_STRING) {
      listOfCities.map((someCity: ICity) => {
        if (someCity.name === city) {
          changeLocationData(someCity.name, someCity.coordinates, 'city');
        }
        return null;
      });
    }
  }, [city]);

  const handleCityInput = (event: BaseSyntheticEvent) => {
    if (event.target.value !== EMPTY_STRING && cyrillicRegexp.exec(event.target.value)) {
      setCity(event.target.value);
      setNavActive(true);
    } else {
      setCity(EMPTY_STRING);
      setNavActive(false);
    }
  };

  const handleListItemClick = (event: BaseSyntheticEvent) => {
    setCity(event.target.innerText);
    setNavActive(false);
  };

  const handleCityBtnClick = () => {
    setCity(EMPTY_STRING);
    setNavActive(false);
  };

  // const inputField = (fieldName: string, onInputFunc?: (e: BaseSyntheticEvent) => void, onClickFunc?: EmptyFunc) => (
  //   <div className="order-location__input-block">
  //     <span className="order-location__input-block__title">{fieldName}</span>
  //     <input
  //       className="order-location__input-block__input"
  //       type="text"
  //       value={city}
  //       placeholder="Начните вводить пункт..."
  //       onInput={onInputFunc}
  //     />
  //     <button
  //       type="button"
  //       className="order-location__input-block__btn city-button"
  //       onClick={onClickFunc}
  //     >
  //       <img
  //         className={`city-button__icon ${city !== EMPTY_STRING && 'city-button__icon_active'}`}
  //         src={deleteIcon}
  //         alt="Delete"
  //       />
  //     </button>
  //   </div>
  // );

  return (
    <div className="order-location">
      <div>
        <div className="order-location__input-block">
          <span className="order-location__input-block__title">Город</span>
          <input
            className="order-location__input-block__input"
            type="text"
            value={city}
            placeholder="Начните вводить пункт..."
            onInput={handleCityInput}
          />
          <button
            type="button"
            className="order-location__input-block__btn city-button"
            onClick={handleCityBtnClick}
          >
            <img
              className={`city-button__icon ${city !== EMPTY_STRING && 'city-button__icon_active'}`}
              src={deleteIcon}
              alt="Delete"
            />
          </button>
          <nav className={`order-location__cities-list ${navActive && 'order-location__cities-list_active'}`}>
            <ul>
              {listOfCities.map((someCity: ICity, index: number) => {
                if (someCity.name.slice(0, city.length) === city) {
                  return (
                    <li
                      className="list-item"
                      onClick={handleListItemClick}
                      role="presentation"
                      key={`city-${index}`}
                    >
                      {someCity.name}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </nav>
        </div>
        <div className="order-location__input-block">
          <span className="order-location__input-block__title">Пункт выдачи</span>
          <input
            className="order-location__input-block__input"
            type="text"
            value={markerName}
            placeholder="Начните вводить пункт..."
          />
          <button
            type="button"
            className="order-location__input-block__btn city-button"
          >
            <img
              className="city-button__icon"
              src={deleteIcon}
              alt="Delete"
            />
          </button>
        </div>
        <YandexMaps />
      </div>
    </div>
  );
};

export default connect(
  (state: IState) => ({
    markerName: state.orderLocation.markerName,
  }),
  (dispatch) => ({
    changeLocationData: bindActionCreators(changeLocationDataAction, dispatch),
  }),
)(OrderLocation);
