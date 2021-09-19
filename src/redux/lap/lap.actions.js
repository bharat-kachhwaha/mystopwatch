import LapActionTypes from './lap.types';

export const addLap = (lap) => ({
	type: LapActionTypes.ADD_LAP,
	payload: lap,
});

export const clearLap = () => ({
	type: LapActionTypes.CLEAR_LAP,
});
