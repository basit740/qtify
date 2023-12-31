import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Album from './Album';
import { useNavigate } from 'react-router-dom';

const Albums = ({ albumsData, showAll }) => {
	// const [albumsData, setAlbumsData] = useState([
	// 	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
	// ]);
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsToShow = 7;
	const [collapse, setCollapse] = useState(!showAll);

	const goNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % albumsData.length);
	};

	const goPrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + albumsData.length) % albumsData.length
		);
	};

	const handleClickAlbum = (albumId) => {
		navigate('/albums/' + albumId);
	};

	// return (
	// 	<div className='grid gap-8 lg:grid-cols-7 overflow-hidden max-w-[1380px] mx-auto'>
	// 		{albumsData.map((al) => {
	// 			return <Album key={al} />;
	// 		})}
	// 	</div>
	// );

	return (
		<div className='relative'>
			{showAll && (
				<>
					{albumsData && albumsData.length > 0 && (
						<div className='grid gap-8 lg:grid-cols-7'>
							{albumsData.map((al, index) => (
								<Album
									key={index}
									number={index + 1}
									metaData={al}
									onClickAlbum={handleClickAlbum}
								/>
							))}
						</div>
					)}
				</>
			)}

			{!showAll && (
				<>
					<button
						onClick={goPrev}
						className='absolute top-[95px] -translate-x-1/2 bg-primary rounded-full w-7 h-7 flex items-center justify-center shadow-lg'
					>
						<i className='fa-solid fa-less-than' style={{ color: 'white' }}></i>
					</button>
					{albumsData && albumsData.length > 0 && (
						<div className='overflow-hidden'>
							<div className='grid gap-8 lg:grid-cols-7'>
								{albumsData
									.slice(currentIndex, currentIndex + itemsToShow)
									.map((al, index) => (
										<Album
											key={index}
											number={index + 1}
											metaData={al}
											onClickAlbum={handleClickAlbum}
										/>
									))}
							</div>
						</div>
					)}
					<button
						onClick={goNext}
						className='left-[98%] absolute top-[95px] bg-primary rounded-full w-7 h-7 flex items-center justify-center shadow-lg'
					>
						<i
							className='fa-solid fa-greater-than'
							style={{ color: 'white' }}
						></i>
					</button>
				</>
			)}
		</div>
	);
};

export default Albums;
