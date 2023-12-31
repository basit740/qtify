import { createContext, useState } from 'react';

export const MyContext = createContext();
export const MyProvider = ({ children }) => {
	const [trackInPlay, setTrackInPlay] = useState(null);
	const [albums, setAlbums] = useState([]);

	// Any methods to update the state
	const updateTrackInPlay = (newValue) => {
		setTrackInPlay(newValue);
	};
	const updateAlbums = (newAlbums) => {
		// setTrackInPlay(newValue);
		setAlbums((prev) => [...newAlbums]);
	};

	return (
		<MyContext.Provider
			value={{ trackInPlay, updateTrackInPlay, albums, updateAlbums }}
		>
			{children}
		</MyContext.Provider>
	);
};
