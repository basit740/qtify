import dropdownItemImg from '../assets/dropdown-item.png';
import { useNavigate } from 'react-router-dom';
const SearchDropdown = ({ albums }) => {
	const navigate = useNavigate();
	return (
		<div
			className='transition-all duration-75 origin-top-right border-[1px] absolute left-1/2 -translate-x-1/2 mt-2 w-[727px] rounded-bl-md rounded-br-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-10 border-primary'
			style={{ marginTop: '10%' }}
		>
			<ul className='max-h-72 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm'>
				{albums.map((album, index) => (
					<li
						key={index}
						className='px-4 py-2 cursor-pointer flex justify-between items-center text-gray-300 pb-4'
						onClick={() => navigate('/albums/' + album.id)}
					>
						<div className='flex items-center'>
							<img
								src={album.images[1].url} // Replace with your image path
								alt='Album'
								className='h-10 w-10 rounded-full mr-3'
							/>
							<div>
								<p className=' text-white'>{album.name}</p>
								<p className='text-xs text-gray-500'>
									{album.artists.map((artist) => artist.name).join(', ')}
								</p>
							</div>
						</div>
						{/* <span>{album.popularity} Follows</span> */}
						<span>40 Follows</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchDropdown;
