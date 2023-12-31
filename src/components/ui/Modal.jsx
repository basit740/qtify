const Modal = ({ onClickAuthorize, onClose }) => {
	return (
		<div className='fixed top-0 right-0 bottom-0 w-full min-h-screen bg-secondary bg-opacity-90 z-50 flex justify-center items-center'>
			<div className='w-[300px] h-[300px] bg-white rounded-md flex justify-center items-center relative'>
				<button
					className='text-secondary bg-primary rounded-md py-3 px-4 font-medium text-xl cursor-pointer'
					onClick={onClickAuthorize}
				>
					Login with Spotify
				</button>
			</div>
		</div>
	);
};

export default Modal;
