import React, { useState } from 'react';
import './stopwatch.css';
import Timer from '../timer/timer';
import ControlButton from '../controlbutton/controlbutton';
import { addLap } from '../../redux/lap/lap.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLaps } from '../../redux/lap/lap.selectors';

function StopWatch({ laps, addLap }) {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

	React.useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	const handleLap = () => {
		addLap(time);
	};

	return (
		<div className='stop-watch'>
			<Timer time={time} />
			<div className='lap-items'>
				{laps.length ? (
					laps.map((lapItem) => <div key={lapItem.id} item={lapItem}></div>)
				) : (
					<span>No Laps</span>
				)}
			</div>
			<ControlButton
				active={isActive}
				isPaused={isPaused}
				handleStart={handleStart}
				handlePauseResume={handlePauseResume}
				handleReset={handleReset}
				handleLap={handleLap}
			/>
		</div>
	);
}
const mapStateToProps = createStructuredSelector({
	laps: selectLaps,
});

const mapDispatchToProps = (dispatch) => ({
	addLap: (item) => dispatch(addLap(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StopWatch);
