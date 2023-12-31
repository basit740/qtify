import { useContext } from 'react';

import convertMsToMinutesSeconds from '../utils/msToDuration';
import { MyContext } from '../context/MyContext';
const AlbumPageTracks = ({ tracks, albumImg }) => {
	const { trackInPlay, updateTrackInPlay } = useContext(MyContext);

	const handleTrackClick = (trackId) => {
		// alert(trackId);

		fetch('https://api.spotify.com/v1/tracks/' + trackId, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('spotify_access_token')}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				// setTrack(data);
				updateTrackInPlay(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	return (
		<section id='track-list mb-32'>
			<ul className='flex items-center justify-between font-normal text-white pb-5'>
				<li>Title</li>
				<li>Artist</li>
				<li>Duration</li>
			</ul>

			{tracks && tracks.length > 0 && (
				<ul className='flex flex-col gap-4 text-sm font-normal capitalize mb-48'>
					{tracks.map((track, index) => (
						<li
							key={index}
							className='cursor-pointer grid grid-cols-3 items-center justify-between border-b-2 pb-3'
							onClick={() => {
								handleTrackClick(track.id);
							}}
						>
							<div className='flex gap-2 items-center'>
								<img src={albumImg} className='w-20 h-24' alt='album img' />
								<span>{track.name}</span>
							</div>
							<span className='justify-self-center'>
								{track.artists[0].name}
							</span>
							{/* <span>{track.du}</span> */}
							<span className='justify-self-end'>
								{convertMsToMinutesSeconds(track.duration_ms)}
							</span>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default AlbumPageTracks;

// import React, { useContext } from 'react';
// import { MyContext } from './MyContext';

// const MyComponent = () => {
// 	const { state, updateState } = useContext(MyContext);

// 	// Use state and updateState here
// 	return <div>{/* Your component JSX */}</div>;
// };
