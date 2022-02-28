import { ICars } from '../constants/fake-data/cars';

export interface IState {
  sidebarMenu: ISidebarMenuState;
  carCard: ICarCardState;
  advancedTab: IAdvancedTabState;
  inputField: IInputFieldState;
  orderConfirm: IOrderConfirmState;
  orderInfo: IOrderInfoState;
}

export interface ISidebarMenuState {
  isOpen: boolean;
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

export interface IOrderInfoState {
  location: IOrderLocationState;
  car: IOrderCarInfoState
}

export interface IOrderLocationState {
  cityName: string;
  markerName: string;
  cityCoords: Array<number>;
  markerCoords: Array<number>;
  selectionCompleted: boolean;
}

export interface IOrderCarInfoState {
  brand: string;
  name: string;
  color: string;
  rentalDuration: {
    from: string,
    to: string,
  }
  tariff: string;
  fullTank: boolean;
  babyChair: boolean;
  rightHandDrive: boolean;
}
