import { ICarsFakeData } from '../constants/fake-data/cars';
// eslint-disable-next-line import/no-cycle
import { ICarInfoData, IPoint } from './api';

export interface IState {
  sidebarMenu: ISidebarMenuState;
  carCard: ICarCardState;
  advancedTab: IAdvancedTabState;
  inputField: IInputFieldState;
  orderConfirm: IOrderConfirmState;
  orderInfo: IOrderInfoState;
  orderStep: IOrderStepState;
  pointsData: IPointsDataState;
  carsData: ICarsDataState;
  radioButton: IRadioButtonState;
}

export interface ISidebarMenuState {
  isOpen: boolean;
}

export interface ICarCardState {
  activeCard: string;
  selectedCarInfo: ICarsFakeData;
}

export interface IAdvancedTabState {
  startDay: string;
  endDay: string;
}

export interface IInputFieldState {
  focusedField: string;
}

export interface IOrderConfirmState {
  isActive: boolean;
}

export interface IOrderInfoState {
  location: IOrderLocationState;
  car: IOrderCarInfoState;
}

export interface IOrderLocationState {
  cityName: string;
  markerName: string;
  cityCoords: Array<number>;
  markerCoords: Array<number>;
  selectionCompleted: boolean;
}

export interface IOrderCarInfoState {
  name: string;
  minPrice: string,
  maxPrice: string,
  image: string,
  currentColor: string;
  colors: string[];
  rentalDuration: {
    from: string,
    to: string,
  }
  tariff: string;
  fullTank: boolean;
  babyChair: boolean;
  rightHandDrive: boolean;
  selectedCar: string,
}

export interface IOrderStepState {
  locationTabCompleted: boolean;
  modelTabCompleted: boolean;
  advancedTabCompleted: boolean;
  activeTab: string;
}

export interface IPointsDataState {
  data: Array<IPoint>;
  cityCoords: Array<IPointCityCoordsState>;
  markerCoords: Array<IPointMarkerCoordsState>;
  isLoading: boolean;
}

export interface IPointCityCoordsState {
  id: string;
  coordinates: number[];
}

export interface IPointMarkerCoordsState {
  id: string;
  coordinates: number[];
}

export interface ICarsDataState {
  count: number;
  data: Array<ICarInfoData>;
  isLoading: boolean;
}

export interface IRadioButtonState {
  selectedItem: string;
}
