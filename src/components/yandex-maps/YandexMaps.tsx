import React from 'react';
import { Clusterer, Map, Placemark } from 'react-yandex-maps';
import './YandexMaps.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../../types/state';
import { ICity, ICityMarker, listOfCities } from '../../constants/cities';
import { changeLocationDataAction } from '../../redux/actions/OrderLocationAction';

interface IProps {
  cityCoords: number[],
  changeLocationData: (name: string, coords: number[], key: string) => void,
}

const YandexMaps = ({ cityCoords, changeLocationData }: IProps) => {
  const handleMarkerClick = (markerName: string, markerCoords: number[]) => {
    changeLocationData(markerName, markerCoords, 'marker');
  };

  return (
    <section className="maps">
      <header className="maps__header">Выбрать на карте:</header>
      <main>
        <Map
          state={{ center: cityCoords, zoom: 9 }}
          height="50vh"
          width="80%"
        >
          <Clusterer>
            {listOfCities.map((city: ICity) => (
              city.markers.map((marker: ICityMarker, index: number) => (
                <Placemark
                  geometry={marker.coordinates}
                  options={{ preset: 'islands#blueCircleDotIcon' }}
                  onClick={() => handleMarkerClick(marker.street, marker.coordinates)}
                  key={`marker-${index}`}
                />
              ))
            ))}
          </Clusterer>
        </Map>
      </main>
    </section>
  );
};

export default connect(
  (state: IState) => ({
    cityCoords: state.orderLocation.cityCoords,
  }),
  (dispatch) => ({
    changeLocationData: bindActionCreators(changeLocationDataAction, dispatch),
  }),
)(YandexMaps);
