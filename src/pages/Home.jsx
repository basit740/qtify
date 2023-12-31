import { useEffect, useState, useContext } from 'react';
import HeroSection from '../components/HeroSection';
import Albums from '../components/Albums';
import Modal from '../components/ui/Modal';
import { MyContext } from '../context/MyContext';
import Faqs from '../components/Faqs';
import Tabs from '../components/Tabs';
const Home = () => {
	// const [loggedIn, setLoggedIn] = useState(false);
	const { updateAlbums } = useContext(MyContext);
	const [albums, setAlbums] = useState([]);
	const [topAllShow, setTopAllShow] = useState(false);
	const [newAllShow, setNewAllShow] = useState(false);

	const handleShowAll = (albumSection) => {
		if (albumSection === 'top') {
			setTopAllShow(!topAllShow);
		} else {
			setNewAllShow(!newAllShow);
		}
	};

	// const handleClickAuthorize = () => {
	// 	alert('authorizing spotify');
	// };
	// login to spotify

	useEffect(() => {
		// if (localStorage.getItem('spotify_logged_in')) {
		// 	let loggedIn = localStorage.getItem('spotify_logged_in');
		// 	if (loggedIn) {
		// 		setLoggedIn(true);
		// 	}
		// }

		if (!localStorage.getItem('spotify_access_token')) {
			fetch('https://accounts.spotify.com/api/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `grant_type=client_credentials&client_id=${
					import.meta.env.VITE_SPOTIFY_CLIENT_ID
				}&client_secret=${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);

					localStorage.setItem('spotify_access_token', data.access_token);

					// Helocalre, data contains the access token

					// if(data)
				})
				.catch((error) => {
					console.log('are you here?');
					console.error('Error:', error);
				});
		} else {
			// send request to get data

			fetch(
				'https://api.spotify.com/v1/browse/new-releases?country=IN&limit=50',
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							'spotify_access_token'
						)}`,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if (data.error?.status === 401) {
						localStorage.removeItem('spotify_access_token');
						window.location.reload();
					} else {
						setAlbums((prev) => [...data.albums.items]);
						updateAlbums(data.albums.items);
					}

					// console.log(data.albums.items);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		}
	}, []);

	// const handleChangeCountry = (country)
	return (
		<>
			<HeroSection />
			{/* {!loggedIn && (
				<Modal onClickAuthorize={handleClickAuthorize} open={!loggedIn} />
			)} */}
			<div className='max-w-[1390px] mx-auto flex flex-col pb-10'>
				<div className='flex flex-col mb-8'>
					<div className='mb-8 flex items-center justify-between'>
						<h2 className=' text-white text-xl'>Top Albums</h2>
						<button
							className='self-end  text-primary text-xl font-semibold cursor-pointer mb-8'
							onClick={() => handleShowAll('top')}
						>
							{topAllShow ? 'Collapse' : 'Show All'}
						</button>
					</div>
					<Albums albumsData={albums} showAll={topAllShow} />
				</div>
				<div className='flex flex-col mb-8'>
					<div className='mb-8 flex items-center justify-between'>
						<h2 className=' text-white text-xl'>New Albums</h2>
						<button
							className='self-end  text-primary text-xl font-semibold cursor-pointer mb-8'
							onClick={() => handleShowAll('new')}
						>
							{topAllShow ? 'Collapse' : 'Show All'}
						</button>
					</div>
					<Albums
						albumsData={albums && albums.slice(-30)}
						showAll={newAllShow}
					/>
				</div>
				<div className='flex flex-col mb-32'>
					<div className='mb-4 flex items-center justify-between'>
						<h2 className=' text-white text-xl'>Songs</h2>

						{/* <button
							className='self-end  text-primary text-xl font-semibold cursor-pointer mb-8'
							onClick={() => handleShowAll('new')}
						>
							{topAllShow ? 'Collapse' : 'Show All'}
						</button> */}
					</div>
					<div className='mb-3'>
						<Tabs />
					</div>
					<Albums
						albumsData={albums && albums.slice(-30)}
						showAll={newAllShow}
					/>
				</div>
				<div className='mb-44'>
					<h3 className='font-medium text-5xl text-white mb-5 text-center'>
						FAQs
					</h3>
					<Faqs />
				</div>
			</div>
		</>
	);
};

export default Home;
