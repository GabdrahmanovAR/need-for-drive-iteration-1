import { Dispatch } from 'redux';
import { IHeaderActionType } from '../../types/actions';
import { HEADER_CLASS_CHANGE } from '../../constants/actions/header';

const headerAddClass = (customClass: string): IHeaderActionType => ({
  type: HEADER_CLASS_CHANGE,
  customClass,
});

export const headerAddClassAction = (customClass: string) => (dispatch: Dispatch) => {
  dispatch(headerAddClass(customClass));
};
