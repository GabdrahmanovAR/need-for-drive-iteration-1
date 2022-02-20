export interface IState {
  sidebarMenu: ISidebarMenuState;
  header: IHeaderState;
}

export interface ISidebarMenuState {
  isOpen: boolean;
}

export interface IHeaderState {
  customClass: string;
}
