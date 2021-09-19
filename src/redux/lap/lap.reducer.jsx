import LapActionTypes from './lap.types';

const INITIAL_STATE = {
	laps: [],
};

const lapReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LapActionTypes.ADD_LAP:
			return {
				...state,
				laps: [...state.laps, { ...action.payload }],
			};
		case LapActionTypes.CLEAR_LAP:
			return {
				...state,
				laps: [],
			};
		default:
			return state;
	}
};

export default lapReducer;
