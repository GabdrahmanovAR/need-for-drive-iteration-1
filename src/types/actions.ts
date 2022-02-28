import { ICars } from '../constants/fake-data/cars';

export interface IActionType {
  type: string;
}

export interface ISidebarMenuActionType extends IActionType {
  menuOpen?: boolean;
}

export interface IOrderLocationActionType {
  cityName?: string;
  markerName?: string;
  cityCoords?: Array<number>;
  markerCoords?: Array<number>;
  selectionCompleted?: boolean;
}

export interface ICarCardActionType extends IActionType {
  activeCard?: string;
  selectedCarInfo?: ICars;
}

export interface IAdvancedTabActionType extends IActionType {
  startDay?: string;
  endDay?: string;
}

export interface IInputFieldActionType extends IActionType{
  focusedField?: string;
}

export interface IOrderConfirmActionType extends IActionType {
  isActive?: boolean;
}

export interface IOrderInfoActionType extends IActionType {
  location?: IOrderLocationActionType;
  car?: IOrderCarInfoActionType;
}

export interface IOrderCarInfoActionType {
  brand?: string;
  name?: string;
  color?: string;
  rentalDuration?: {
    from?: string,
    to?: string,
  }
  tariff?: string;
  fullTank?: boolean;
  babyChair?: boolean;
  rightHandDrive?: boolean;
}
