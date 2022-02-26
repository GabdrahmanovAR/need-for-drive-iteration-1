import { ICars } from '../constants/fake-data/cars';

export interface IState {
  sidebarMenu: ISidebarMenuState;
  header: IHeaderState;
  orderLocation: IOrderLocationState;
  carCard: ICarCardState;
}

export interface ISidebarMenuState {
  isOpen: boolean;
}

export interface IHeaderState {
  customClass: string;
}

export interface IOrderLocationState {
  cityName: string;
  markerName: string;
  cityCoords: Array<number>;
  markerCoords: Array<number>;
  selectionCompleted: boolean;
}

export interface ICarCardState {
  activeCard: string;
  selectedCarInfo: ICars;
}
