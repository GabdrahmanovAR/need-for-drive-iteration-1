import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../../constants/common';
import './LocationTab.scss';
import YandexMaps from '../../yandex-maps/YandexMaps';
import { ICity, listOfCities } from '../../../constants/fake-data/cities';
import { IState } from '../../../types/state';
import { changeLocationDataAction } from '../../../redux/actions/OrderLocationAction';
import InputField from '../../input-field/InputField';

interface IProps {
  cityName: string,
  markerName: string,
  changeLocationData: (name: string, coords: number[], key: string) => void,
}

const LocationTab = ({ cityName, markerName, changeLocationData }: IProps) => {
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

  const handleCityInputClick = () => {
    setCitiesMenu(true);
  };

  const dropDownMenu = () => (
    <div className="location-tab__drop-down-menu">
      <nav className={`location-tab__cities-list ${citiesMenu && 'location-tab__cities-list_active'}`}>
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
  );

  return (
    <div className="location-tab">
      <div className="location-tab__point">
        <InputField
          id="city-field"
          title="Город"
          fieldValue={city}
          placeholder="Начните вводить город..."
          onInputFunc={handleCityInput}
          onClickInputFunc={handleCityInputClick}
          onClickBtnFunc={handleCityBtnClick}
          childComponent={dropDownMenu()}
        />
        <InputField
          id="marker-field"
          title="Пункт выдачи"
          fieldValue={marker}
          placeholder="Выберите пункт на карте"
          onClickBtnFunc={handleMarkerBtnClick}
        />
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
)(LocationTab);
