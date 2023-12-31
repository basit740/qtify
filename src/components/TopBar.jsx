import { useState } from 'react';

import appLogo from '../assets/logo.png';
import SearchBox from './SearchBox';

import FeedbackForm from './FeedbackForm';
const TopBar = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => {
		setShowModal(false);
	};
	return (
		<div className='bg-primary p-4 flex justify-between items-center'>
			<img src={appLogo} alt=' LOgo' />
			<SearchBox />

			<button
				onClick={() => setShowModal(true)}
				className='bg-secondary text-primary text-lg font-semibold  px-4 py-2 rounded-md border-primary border-2 transition-all duration-75 hover:border-white hover:text-white'
			>
				Give Feedback
			</button>

			{showModal && (
				<div
					className='fixed top-0 left-0 bottom-0 right-0 w-full min-h-screen bg-secondary bg-opacity-90 z-20'
					onClick={() => setShowModal(false)}
				>
					<div className='w-full flex justify-center'>
						<div
							className='w-[526px] h-[600px] bg-white rounded-md py-4 px-6 mt-24 shadow-lg'
							onClick={(event) => {
								event.stopPropagation();
							}}
						>
							<FeedbackForm onCloseClick={handleClose} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default TopBar;
