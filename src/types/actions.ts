import { ICars } from '../constants/fake-data/cars';

export interface IActionType {
  type: string;
}

export interface ISidebarMenuActionType extends IActionType {
  menuOpen?: boolean;
}

export interface IOrderLocationActionType extends IActionType {
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
