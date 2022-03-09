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

export interface ICarsData {
  count: number;
  data: Array<ICarInfoData>;
}

export interface ICarInfoData {
  updatedAt: number;
  createdAt: number;
  description: string;
  priceMin: number;
  priceMax: number;
  name: string;
  number: string;
  categoryId: ICarCategory;
  thumbnail: ICarThumbnail,
  tank: number;
  colors: string[],
  id: string;
}

export interface ICarCategory {
  name: string;
  description: string;
  id: string;
}

export interface ICarThumbnail {
  path: string;
  size: number;
  originalname: string;
  mimetype: string;
}
