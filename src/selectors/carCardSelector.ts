import { IState } from '../types/state';

export const carCardSelector = (state: IState) => ({
  activeCard: state.carCard.activeCard,
  selectedCarInfo: state.carCard.selectedCarInfo,
});
