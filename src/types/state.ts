import { ICars } from '../constants/fake-data/cars';

export interface IState {
  sidebarMenu: ISidebarMenuState;
  orderLocation: IOrderLocationState;
  carCard: ICarCardState;
  advancedTab: IAdvancedTabState;
  inputField: IInputFieldState;
  orderConfirm: IOrderConfirmState;
}

export interface ISidebarMenuState {
  isOpen: boolean;
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
