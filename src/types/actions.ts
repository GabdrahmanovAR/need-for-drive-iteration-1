export interface IActionType {
  type: string;
}

export interface ISidebarMenuActionType extends IActionType {
  menuOpen?: boolean;
}

export interface IHeaderActionType extends IActionType {
  customClass?: string;
}

export interface IOrderLocationActionType extends IActionType {
  cityName?: string;
  markerName?: string;
  cityCoords?: Array<number>;
  markerCoords?: Array<number>;
  selectionCompleted?: boolean;
}
