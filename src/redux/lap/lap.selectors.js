import { createSelector } from 'reselect';

const selectLap = (state) => state.lap;

export const selectLaps = createSelector([selectLap], (lap) => lap.laps);
