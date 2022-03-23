export interface IPointsData {
  data: Array<IPoint>;
}

export interface IPoint {
  id: string,
  address: string,
  cityId: {
    id: string,
    name: string,
  },
  name: string,
}
