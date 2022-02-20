export interface IActionType {
  type: string;
}

export interface ISidebarMenuActionType extends IActionType {
  menuOpen?: boolean;
}

export interface IHeaderActionType extends IActionType {
  customClass?: string;
}
