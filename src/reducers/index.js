import formVisibleReducer from './form-visible-reducer';
import tapRoomReducer from './tap-room-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTapList: tapRoomReducer
});

export default rootReducer;