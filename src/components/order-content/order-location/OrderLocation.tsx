import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../../constants/common';
import deleteIcon from '../../../assets/icons/delete-city.svg';
import './OrderLocation.scss';
import YandexMaps from '../../yandex-maps/YandexMaps';
import { ICity, listOfCities } from '../../../constants/cities';
import { IState } from '../../../types/state';
import { changeLocationDataAction } from '../../../redux/actions/OrderLocationAction';

interface IProps {
  cityName: string,
  markerName: string,
  changeLocationData: (name: string, coords: number[], key: string) => void,
}

const OrderLocation = ({ cityName, markerName, changeLocationData }: IProps) => {
  const [city, setCity] = useState(EMPTY_STRING);
  const [marker, setMarker] = useState(EMPTY_STRING);
  const [citiesMenu, setCitiesMenu] = useState(false);
  const cyrillicRegexp = new RegExp(/^[А-я]*$/);

  useEffect(() => {
    if (cityName !== EMPTY_STRING || markerName !== EMPTY_STRING) {
      setCity(cityName);
      setMarker(markerName);
    }
  }, [cityName, markerName]);

  useEffect(() => {
    if (markerName !== EMPTY_STRING) setMarker(markerName);
  }, [markerName]);

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
      setCitiesMenu(true);
    } else {
      setCity(EMPTY_STRING);
      setCitiesMenu(false);
    }
  };

  const handleListItemClick = (event: BaseSyntheticEvent) => {
    setCity(event.target.innerText);
    setCitiesMenu(false);
  };

  const handleCityBtnClick = () => {
    setCity(EMPTY_STRING);
    setMarker(EMPTY_STRING);
    changeLocationData(EMPTY_STRING, EMPTY_ARRAY, 'marker');
    changeLocationData(EMPTY_STRING, [55.753215, 37.622504], 'city');
    setCitiesMenu(false);
  };

  const handleMarkerBtnClick = () => {
    setMarker(EMPTY_STRING);
    changeLocationData(EMPTY_STRING, EMPTY_ARRAY, 'marker');
    setCitiesMenu(false);
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
      <div className="order-location__input-block">
        <span className="order-location__input-block__title">Город</span>
        <input
          className="order-location__input-block__input"
          type="text"
          value={city}
          placeholder="Начните вводить пункт..."
          onInput={handleCityInput}
          onFocus={() => setCitiesMenu(true)}
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
        <nav className={`order-location__cities-list ${citiesMenu && 'order-location__cities-list_active'}`}>
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
          value={marker}
          placeholder="Начните вводить пункт..."
        />
        <button
          type="button"
          className="order-location__input-block__btn city-button"
          onClick={handleMarkerBtnClick}
        >
          <img
            className={`city-button__icon ${marker !== EMPTY_STRING && 'city-button__icon_active'}`}
            src={deleteIcon}
            alt="Delete"
          />
        </button>
      </div>
      <YandexMaps />
    </div>
  );
};

export default connect(
  (state: IState) => ({
    cityName: state.orderLocation.cityName,
    markerName: state.orderLocation.markerName,
  }),
  (dispatch) => ({
    changeLocationData: bindActionCreators(changeLocationDataAction, dispatch),
  }),
)(OrderLocation);
