import ImgShuffle from '../assets/shuffle.png';
import ImgAddToLibrary from '../assets/add-to-library.png';

const AlbumPageHero = ({ metaData }) => {
	if (metaData) {
		return (
			<article className='mt-8 flex gap-14 items-center'>
				<img
					className='w-[288px] h-[329px] object-cover rounded-xl'
					src={metaData.images[1].url}
					alt='album hero img'
				/>
				<div className='flex flex-col gap-4 text-xl font-normal'>
					<h3 className='font-semibold text-4xl'>{metaData?.name}</h3>
					<p>{metaData.label}</p>
					<p className=''>{metaData.release_date}</p>
					<div className='flex items-center gap-2'>
						<span>{metaData.total_tracks} Songs</span>
						{/* <span>...</span> */}
						<span>.</span>
						<span>{metaData.popularity} Followers</span>
					</div>
					<div className='flex items-center gap-6'>
						<button className='bg-primary rounded-md flex items-center gap-2 border py-2 px-4 text-lg text-white transition-all duration-200 hover:bg-secondary hover:border-primary hover:text-primary'>
							<img src={ImgShuffle} /> <span>Shuffle</span>
						</button>
						<button className='bg-secondary rounded-md flex items-center gap-2 border py-2 px-4 text-lg transition-all duration-200 hover:bg-primary hover:border-white hover:text-white'>
							<img src={ImgAddToLibrary} /> <span>Add to Library</span>
						</button>
					</div>
				</div>
			</article>
		);
	} else {
		return (
			<article className='mt-8 flex gap-14 items-center'>
				<h1>Loading...</h1>
				{/* <img
					className='w-[200px] rounded-xl overflow-hidden h-[329px] object-cover'
					src={metaData.images[1].url}
					className='max-w-[288px]'
					alt='album hero img'
				/>
				<div className='flex flex-col gap-4 text-xl font-normal'>
					<h3 className='font-semibold text-4xl'>{metaData?.name}</h3>
					<p>{metaData.label}</p>
					<p className=''>{metaData.release_date}</p>
					<div className='flex items-center gap-2'>
						<span>{metaData.total_tracks} Songs</span>
						<span>...</span>
						<span>{metaData.popularity}</span>
					</div>
					<div className='flex items-center gap-6'>
						<button className='bg-primary flex items-center gap-2 border py-2 px-4 text-lg text-white transition-all duration-200 hover:bg-secondary hover:border-primary hover:text-primary'>
							<img src={ImgShuffle} /> <span>Shuffle</span>
						</button>
						<button className='bg-secondary flex items-center gap-2 border py-2 px-4 text-lg transition-all duration-200 hover:bg-primary hover:border-white hover:text-white'>
							<img src={ImgAddToLibrary} /> <span>Add to Library</span>
						</button>
					</div>
				</div> */}
			</article>
		);
	}
};

export default AlbumPageHero;
