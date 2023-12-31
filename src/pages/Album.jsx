import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import AlbumPageHero from '../components/AlbumPageHero';
import AlbumPageTracks from '../components/AlbumPageTracks';

const AlbumPage = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [album, setAlbum] = useState(null);
	// alert(params.albumId);

	useEffect(() => {
		fetch('https://api.spotify.com/v1/albums/' + params.albumId, {
			method: 'GET',
			headers: {
				Authorization: ` Bearer ${localStorage.getItem(
					'spotify_access_token'
				)} `,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setAlbum(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, [params.albumId]);
	return (
		<div className='max-w-[1390px] mx-auto'>
			<div className='text-white'>
				<button
					onClick={() => navigate('/')}
					className='mt-12 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center cursor-pointer'
				>
					<i
						className='fa fa-arrow-left'
						style={{ color: 'white' }}
						aria-hidden='true'
					></i>
				</button>
				<AlbumPageHero metaData={album} />
				<div className='mb-16'></div>
				{album && (
					<AlbumPageTracks
						albumImg={album.images[1].url}
						tracks={album.tracks.items}
					/>
				)}
			</div>
		</div>
	);
};

export default AlbumPage;

// fill: #121212;
// stroke-width: 1px;
// stroke: #FFF;
