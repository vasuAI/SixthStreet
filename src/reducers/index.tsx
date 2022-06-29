import {combineReducers} from 'redux';
import {menReducer, womenReducer, kidsReducer} from './homeTabReducer';
import {
  kidsCategoryReducer,
  menCategoryReducer,
  womenCategoryReducer,
} from './categoryTabReducer';
const rootReducer = combineReducers({
  menReducer,
  kidsReducer,
  womenReducer,
  menCategoryReducer,
  kidsCategoryReducer,
  womenCategoryReducer,
});

export default rootReducer;
