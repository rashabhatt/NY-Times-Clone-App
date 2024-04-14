import { combineReducers } from 'redux';
import searchedReducer from './reducer';

const rootReducer = combineReducers({
  searchedData: searchedReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
