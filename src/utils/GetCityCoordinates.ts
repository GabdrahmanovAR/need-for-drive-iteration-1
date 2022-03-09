import { IPointCityCoordsState, IPointsDataState } from '../types/state';

export const GetCityCoordinates = (pointsDataState: IPointsDataState, desiredCityId: string): number[] => {
  let coordinates: number[] = [];
  console.log(desiredCityId);
  pointsDataState.cityCoords.forEach((city: IPointCityCoordsState) => {
    if (city.id === desiredCityId) {
      console.log(city.id);
      console.log(city.coordinates);
      coordinates = city.coordinates;
    }
  });
  console.log(coordinates);
  return coordinates;
};
