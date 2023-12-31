import { useContext, useState, useEffect, useRef } from 'react';
import { MyContext } from '../context/MyContext';
import WaveSurfer from 'wavesurfer.js';
import ImgBtnPlay from '../assets/btn-play.png';
import ImgBtnPause from '../assets/btn-pause.png';

const TrackPlayer = () => {
	const { trackInPlay } = useContext(MyContext);
	const waveformRef = useRef(null);
	const wavesurfer = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [totalTime, setTotalTime] = useState(0);

	useEffect(() => {
		wavesurfer.current = WaveSurfer.create({
			container: waveformRef.current,
			waveColor: 'violet',
			progressColor: 'purple',
		});

		return () => {
			if (wavesurfer.current) {
				wavesurfer.current.destroy();
			}
		};
	}, []);

	useEffect(() => {
		const handleAudioprocess = (time) => {
			setCurrentTime(time);
		};

		const handleReady = () => {
			setTotalTime(wavesurfer.current.getDuration());
		};

		const handleFinish = () => {
			setIsPlaying(false);
		};

		if (trackInPlay?.preview_url) {
			setIsPlaying(false);
			setCurrentTime(0);
			wavesurfer.current.empty();
			wavesurfer.current.load(trackInPlay.preview_url);

			wavesurfer.current.on('audioprocess', handleAudioprocess);
			wavesurfer.current.on('ready', handleReady);
			wavesurfer.current.on('finish', handleFinish);
		}

		// Cleanup: remove event listeners
		return () => {
			if (wavesurfer.current) {
				wavesurfer.current.un('audioprocess', handleAudioprocess);
				wavesurfer.current.un('ready', handleReady);
				wavesurfer.current.un('finish', handleFinish);
			}
		};
	}, [trackInPlay]);

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
		wavesurfer.current.playPause();
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	const getProgressBarWidth = () => {
		const progressPercentage = (currentTime / totalTime) * 100;
		return `${progressPercentage}%`;
	};

	return (
		<div
			id='id-track-player'
			className='shadow-audio-player py-12 px-8 bg-secondary fixed w-full bottom-0 mt-9'
		>
			<div ref={waveformRef} style={{ display: 'none' }} />
			<div className='flex justify-between'>
				{/* ... Track information and artwork ... */}

				{trackInPlay && (
					<div className='flex items-center justify-center gap-3'>
						<img
							src={trackInPlay.album.images[1].url}
							className='rounded-md w-[75px] h-[82px]'
							alt=''
						/>
						<p className='flex flex-col gap-2 text-white'>
							<span className='font-normal text-base'>{trackInPlay.name}</span>
							<span className='text-xs'>{trackInPlay.album.name}</span>
						</p>
					</div>
				)}
			</div>
			{trackInPlay && (
				<>
					<div className='flex flex-col gap-6 justify-self-start absolute left-[50%] top-[20%] -translate-x-1/2 -translate-y-2'>
						<button
							className='text-white self-center'
							onClick={handlePlayPause}
						>
							<img src={isPlaying ? ImgBtnPause : ImgBtnPlay} alt='' />
						</button>
						<div
							id='progress-bar-container'
							className='flex items-center justify-between gap-2'
						>
							<span className='text-white'>{formatTime(currentTime)}</span>
							<div
								id='progress-bar-current'
								className='rounded-md bg-white w-[450px] h-1'
							>
								<div
									id='progress-bar-default'
									className='rounded-md bg-green-400 h-1'
									style={{ width: getProgressBarWidth() }}
								></div>
							</div>
							<span className='text-white'>{formatTime(totalTime)}</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default TrackPlayer;
