import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import sidebarMenuReducer from './reducers/SidebarMenuReducer';
import cardModelCardReducer from './reducers/CardCardReducer';
import advancedTabReducer from './reducers/AdvancedTabReducer';
import inputFieldReducer from './reducers/InputFieldReducer';
import orderConfirmReducer from './reducers/OrderConfirmReducer';
import orderInfoReducer from './reducers/OrderInfoReducer';

export const store = createStore(
  combineReducers({
    sidebarMenu: sidebarMenuReducer,
    carCard: cardModelCardReducer,
    advancedTab: advancedTabReducer,
    inputField: inputFieldReducer,
    orderConfirm: orderConfirmReducer,
    orderInfo: orderInfoReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
