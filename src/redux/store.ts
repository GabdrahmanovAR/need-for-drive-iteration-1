import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import sidebarMenuReducer from './reducers/SidebarMenuReducer';
import headerReducer from './reducers/HeaderReducer';
import orderLocationReducer from './reducers/OrderLocationReducer';

export const store = createStore(
  combineReducers({
    sidebarMenu: sidebarMenuReducer,
    header: headerReducer,
    orderLocation: orderLocationReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
