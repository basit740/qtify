import heroImg from '../assets/hero-img.png';

const HeroSection = () => {
	return (
		<section id='section-hero '>
			<div className='conatiner w-full flex justify-center items-center'>
				<div className='max-w-[900px] flex justify-center items-center'>
					<div className='flex justify-between items-center'>
						<div className='text-white text-center text-3xl font-semibold'>
							<p className='mb-2'>100 Thousand Songs, ad-free</p>
							<p>Over thousands podcast episodes</p>
						</div>
						<img src={heroImg} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
