import React, { useEffect, useState } from 'react';
import {
  Clusterer, Map, Placemark, YMaps, YMapsApi,
} from 'react-yandex-maps';
import './YandexMaps.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocationDataAction } from '../../redux/actions/OrderInfoAction';
import { orderInfoSelector } from '../../selectors/orderInfoSelector';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../constants/common';
import { pointsDataSelector } from '../../selectors/pointsData';
import { GetCoordinates } from '../../utils/GetCoordinates';
import { IPointCityCoordsState, IPointMarkerCoordsState } from '../../types/state';
import { changeCityCoords, changeMarkerCoords } from '../../redux/actions/PointsDataAction';
import { IPoint } from '../../types/api';

const YandexMaps = () => {
  const { location } = useSelector(orderInfoSelector);
  const pointsDataState = useSelector(pointsDataSelector);
  const dispatch = useDispatch();
  const [someCityCoords, setSomeCityCoords] = useState([] as IPointCityCoordsState[]);
  const [someMarkerCoords, setSomeMarkerCoords] = useState([] as IPointMarkerCoordsState[]);

  const handleMarkerClick = (markerId: string, markerCoords: number[]) => {
    let markerName = EMPTY_STRING;
    let markerCity = EMPTY_STRING;
    let markerCityId = EMPTY_STRING;
    let markerCityCoords: number[] = [];

    pointsDataState.data.forEach((point: IPoint) => {
      if (point.id === markerId) {
        markerName = point.address;
        markerCity = point.cityId.name;
        markerCityId = point.cityId.id;
      }
    });

    pointsDataState.cityCoords.forEach((city: IPointCityCoordsState) => {
      if (city.id === markerCityId) {
        markerCityCoords = city.coordinates;
      }
    });

    dispatch(changeLocationDataAction(markerCity, markerCityCoords, 'city'));
    dispatch(changeLocationDataAction(markerName, markerCoords, 'marker'));
  };

  const handleOnLoadMap = (maps: YMapsApi) => {
    const array: any = GetCoordinates(maps, pointsDataState.data);
    array.then((result: any) => {
      setSomeCityCoords(result[0]);
      setSomeMarkerCoords(result[1]);
    });
  };

  useEffect(() => {
    if (someCityCoords !== [] || someMarkerCoords !== []) {
      dispatch(changeCityCoords(someCityCoords));
      dispatch(changeMarkerCoords(someMarkerCoords));
    }
  }, [someCityCoords, someMarkerCoords]);

  return (
    <section className="maps">
      <header className="maps__header">Выбрать на карте:</header>
      <main>
        <YMaps
          query={{
            ns: 'use-load-option',
            apikey: '70daecdb-7319-4705-83ef-c1f61e7799a7',
            load: 'geocode',
          }}
        >
          <Map
            onLoad={handleOnLoadMap}
            state={{
              center: location.markerCoords === EMPTY_ARRAY ? location.cityCoords : location.markerCoords,
              zoom: location.markerCoords === EMPTY_ARRAY ? 9 : 14,
            }}
            height="45vh"
            width="100%"
            modules={['geocode']}
          >
            <Clusterer options={{ preset: 'islands#darkGreenClusterIcons' }}>
              {pointsDataState.markerCoords.map((marker: IPointCityCoordsState, index: number) => (
                <Placemark
                  geometry={marker.coordinates}
                  options={{ preset: 'islands#darkGreenCircleDotIcon' }}
                  onClick={() => handleMarkerClick(marker.id, marker.coordinates)}
                  key={`marker-${index}`}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
      </main>
    </section>
  );
};

export default YandexMaps;
