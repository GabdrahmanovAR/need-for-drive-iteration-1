export interface IState {
  sidebarMenu: ISidebarMenuState;
  header: IHeaderState;
  orderLocation: IOrderLocationState;
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
