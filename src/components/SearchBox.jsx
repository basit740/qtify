import { useContext } from 'react';
import SearchIcon from '../assets/search-icon.png';
import SearchDropdown from './SearchDropdown';
import { MyContext } from '../context/MyContext';
import { useState } from 'react';
let searchTerm = '';
let searchedItems = [];
const SearchBox = () => {
	const { albums: globalAlbums } = useContext(MyContext);
	const [searchAlbums, setSearchAlbums] = useState([]);
	const [albums, setAlbums] = useState([
		{
			name: 'Album name1',
			artist: 'Artist names with comma separated values',
			follows: '100',
			image: '/assets/dropdown-item.png', // make sure the path is correct
		},
		{
			name: 'Album name2',
			artist: 'Artist names with comma separated values',
			follows: '200',
			image: '/assets/dropdown-item.png',
		},
		{
			name: 'Album name3',
			artist: 'Artist names with comma separated values',
			follows: '300',
			image: '/assets/dropdown-item.png',
		},
		{
			name: 'Album name4',
			artist: 'Artist names with comma separated values',
			follows: '400',
			image: '/assets/dropdown-item.png',
		},
		{
			name: 'Album name5',
			artist: 'Artist names with comma separated values',
			follows: '500',
			image: '/assets/dropdown-item.png',
		},
	]);

	const [showDropdown, setShowDropdown] = useState(false);

	const handleSearch = (e) => {
		if (e.target.value.length > 2) {
			// process it
			searchTerm = e.target.value;
			searchedItems = globalAlbums.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			console.log({ searchedItems: searchedItems });
			setSearchAlbums((prev) => [...searchedItems]);

			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	};
	return (
		<div className='flex justify-between border-2 border-primary rounded-md   w-[568px] relative'>
			<input
				className='pl-4 pr-4 py-2 w-full text-sm outline-none rounded-l-md'
				type='search'
				placeholder='Search an album of your choice'
				onChange={handleSearch}
			/>
			<button className='p-2 border-l-2 bg-white rounded-r-md'>
				<img src={SearchIcon} alt='search icon' />
			</button>

			{showDropdown && <SearchDropdown albums={searchAlbums} />}
		</div>
	);
};

export default SearchBox;
