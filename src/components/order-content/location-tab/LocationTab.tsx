import React, {
  BaseSyntheticEvent, FC, useEffect, useState,
} from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../../constants/common';
import './LocationTab.scss';
import YandexMaps from '../../yandex-maps/YandexMaps';
import { ICity, ICityMarker, listOfCities } from '../../../constants/fake-data/cities';
import { IState } from '../../../types/state';
import { changeLocationDataAction } from '../../../redux/actions/OrderInfoAction';
import InputField from '../../input-field/InputField';
import DropDownMenu from '../../dropdown-menu/DropDownMenu';
import { changeLocTabStateAction } from '../../../redux/actions/OrderStepAction';

interface ILocationTabProps {
  cityName: string,
  markerName: string,
  changeLocationData: (name: string, coords: number[], key: string) => void,
}

const LocationTab: FC<ILocationTabProps> = ({ cityName, markerName, changeLocationData }) => {
  const [city, setCity] = useState(EMPTY_STRING);
  const [marker, setMarker] = useState(EMPTY_STRING);
  const [citiesMenuActive, setCitiesMenuActive] = useState(false);
  const [markerMenuActive, setMarkerMenuActive] = useState(false);
  const cyrillicRegexp = new RegExp(/^[А-я]*$/);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cityName !== EMPTY_STRING || markerName !== EMPTY_STRING) {
      setCity(cityName);
      setMarker(markerName);
    }
  }, [cityName, markerName]);

  useEffect(() => {
    if (city === EMPTY_STRING) return;
    listOfCities.forEach((someCity: ICity) => {
      if (someCity.name === city) {
        changeLocationData(someCity.name, someCity.coordinates, 'city');
      }
      return null;
    });
  }, [city]);

  useEffect(() => {
    if (marker === EMPTY_STRING) return;
    listOfCities.forEach((someCity: ICity) => {
      someCity.markers.forEach((someMarker: ICityMarker) => {
        if (someMarker.street === marker) {
          changeLocationData(someMarker.street, someMarker.coordinates, 'marker');
          changeLocationData(someCity.name, someCity.coordinates, 'city');
        }
        return null;
      });
    });
  }, [marker]);

  useEffect(() => {
    if (citiesMenuActive && markerMenuActive) setMarkerMenuActive(false);
  }, [citiesMenuActive]);

  useEffect(() => {
    if (citiesMenuActive && markerMenuActive) setCitiesMenuActive(false);
  }, [markerMenuActive]);

  const handleCityInput = (event: BaseSyntheticEvent) => {
    if (event.target.value !== EMPTY_STRING && cyrillicRegexp.exec(event.target.value)) {
      setCity(event.target.value);
      setCitiesMenuActive(true);
    } else {
      setCity(EMPTY_STRING);
      setCitiesMenuActive(false);
    }
  };

  const handleCityListItemClick = (event: BaseSyntheticEvent) => {
    setCity(event.target.innerText);
    setCitiesMenuActive(false);
  };

  const handleMarkerListItemClick = (event: BaseSyntheticEvent) => {
    setMarker(event.target.innerText);
    setMarkerMenuActive(false);
  };

  const handleCityBtnClick = () => {
    setCity(EMPTY_STRING);
    setMarker(EMPTY_STRING);
    changeLocationData(EMPTY_STRING, EMPTY_ARRAY, 'marker');
    changeLocationData(EMPTY_STRING, [55.753215, 37.622504], 'city');
    setCitiesMenuActive(false);
    setMarkerMenuActive(false);
    dispatch(changeLocTabStateAction(false));
  };

  const handleMarkerBtnClick = () => {
    setMarker(EMPTY_STRING);
    changeLocationData(EMPTY_STRING, EMPTY_ARRAY, 'marker');
    setCitiesMenuActive(false);
    dispatch(changeLocTabStateAction(false));
  };

  const handleCityInputClick = () => {
    setCitiesMenuActive(true);
  };

  const handleMarkerInputClick = () => {
    setMarkerMenuActive(true);
  };

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
          childComponent={(
            <DropDownMenu
              data={listOfCities}
              isActive={citiesMenuActive}
              onClickFunc={handleCityListItemClick}
              cityName={city}
            />
          )}
        />
        <InputField
          id="marker-field"
          title="Пункт выдачи"
          fieldValue={marker}
          placeholder="Выберите пункт выдачи..."
          onClickInputFunc={handleMarkerInputClick}
          onClickBtnFunc={handleMarkerBtnClick}
          childComponent={(
            <DropDownMenu
              data={listOfCities}
              isActive={markerMenuActive}
              onClickFunc={handleMarkerListItemClick}
            />
          )}
        />
      </div>
      <YandexMaps />
    </div>
  );
};

export default connect(
  (state: IState) => ({
    cityName: state.orderInfo.location.cityName,
    markerName: state.orderInfo.location.markerName,
  }),
  (dispatch) => ({
    changeLocationData: bindActionCreators(changeLocationDataAction, dispatch),
  }),
)(LocationTab);
