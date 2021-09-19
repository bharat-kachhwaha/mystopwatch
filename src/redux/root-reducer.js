import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import lapReducer from './lap/lap.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['lap'],
};

const rootReducer = combineReducers({
	lap: lapReducer,
});

export default persistReducer(persistConfig, rootReducer);
