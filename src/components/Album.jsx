import AlbumImg from '../assets/album-img.png';

const Album = ({ number, metaData, onClickAlbum }) => {
	return (
		<article
			className='max-w-[159px] cursor-pointer transition-all duration-200 hover:scale-125'
			onClick={() => onClickAlbum(metaData.id)}
		>
			<div>
				<img src={metaData.images[1].url} className='' alt='' />
				<h4 className='bg-white rounded-bl-md rounded-br-md py-2 px-3'>
					<span className=' bg-secondary py-1 px-2 rounded-lg text-xs font-normal text-white'>
						{metaData.total_tracks} Tracks
					</span>
				</h4>
			</div>
			<p className='text-white text-sm font-normal pt-2 pb-1 bg-secondary'>
				{metaData.name}
			</p>
		</article>
	);
};

export default Album;
