import { ICarsFakeData } from '../constants/fake-data/cars';
import { IPoint } from './api';
import { IPointCityCoordsState, IPointMarkerCoordsState } from './state';

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
  selectedCarInfo?: ICarsFakeData;
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
  minPrice?: string,
  maxPrice?: string,
  image?: string,
  color?: string;
  rentalDuration?: {
    from?: string,
    to?: string,
  }
  tariff?: string;
  fullTank?: boolean;
  babyChair?: boolean;
  rightHandDrive?: boolean;
  selectedCar?: string,
}

export interface IOrderStepActionType extends IActionType {
  locationTabCompleted?: boolean;
  modelTabCompleted?: boolean;
  advancedTabCompleted?: boolean;
  activeTab?: string;
}

export interface IPointsDataActionType extends IActionType {
  data?: Array<IPoint>;
  cityCoords?: Array<IPointCityCoordsState>;
  markerCoords?: Array<IPointMarkerCoordsState>;
  isLoading?: boolean;
}
