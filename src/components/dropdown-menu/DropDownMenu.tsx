import React, { BaseSyntheticEvent, FC } from 'react';
import { useSelector } from 'react-redux';
import { ICity, ICityMarker } from '../../constants/fake-data/cities';
import './DropDownMenu.scss';
import { EMPTY_STRING } from '../../constants/common';
import { inputFieldSelector } from '../../selectors/inputFieldSelector';

interface IDropDownMenu {
  data: ICity[],
  isActive: boolean;
  onClickFunc: (e: BaseSyntheticEvent) => void,
  cityName?: string,
}

const DropDownMenu: FC<IDropDownMenu> = (props) => {
  const {
    isActive,
    data,
    onClickFunc,
    cityName = EMPTY_STRING,
  } = props;
  const inputFieldState = useSelector(inputFieldSelector);

  return (
    <div className="drop-down-menu">
      <nav className={`drop-down-menu__list ${isActive && 'drop-down-menu__list_active'}`}>
        <ul>
          {inputFieldState.focusedField === 'city-field'
            ? (data.map((someCity: ICity, index: number) => {
              if (someCity.name.slice(0, cityName.length) !== cityName) return null;
              return (
                <li
                  className="list-item"
                  onClick={onClickFunc}
                  role="presentation"
                  key={`city-${index}`}
                >
                  {someCity.name}
                </li>
              );
            }))
            : (data.map((someCity: ICity) => someCity.markers.map((marker: ICityMarker, index: number) => (
              <li
                className="list-item"
                onClick={onClickFunc}
                role="presentation"
                key={`marker-${index}`}
              >
                {marker.street}
              </li>
            ))))}
        </ul>
      </nav>
    </div>
  );
};

export default DropDownMenu;
