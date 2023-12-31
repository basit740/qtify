import { useState } from 'react';

import Header from './layout/Header';
import Home from './pages/Home';
import AlbumPage from './pages/Album';
import TrackPlayer from './components/TrackPlayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyProvider } from './context/MyContext';
function App() {
	// track player here
	// const [track, setTrack] = useState(null);
	// const handleClickTrack = (trackId) => {
	// 	fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl', {
	// 		method: 'GET',
	// 		headers: {
	// 			Authorization: `Bearer ${localStorage.getItem('spotify_access_token')}`,
	// 		},
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);

	// 			// setTrack(data);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// };
	return (
		<BrowserRouter>
			<MyProvider>
				<Header />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/albums/:albumId' element={<AlbumPage />}></Route>
				</Routes>
				<TrackPlayer />
			</MyProvider>
		</BrowserRouter>
	);
}

export default App;
