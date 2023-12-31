import { useState } from 'react';

const FeedbackForm = ({ onCloseClick }) => {
	// Define state for each input
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [description, setDescription] = useState('');

	const [submitText, setSubmitText] = useState('Submit Feedback');

	// Function to handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Process form data here
		console.log({ fullName, email, subject, description });
		setSubmitText(`Thank you ${fullName}`);

		setTimeout(() => {
			onCloseClick();
		}, 2000);
	};

	return (
		<form onSubmit={handleSubmit} className='relative flex flex-col gap-7 z-10'>
			<h2 className='text-2xl font-bold mb-4 text-center'>Feedback</h2>
			<button
				className='absolute top-2 right-2 text-xl text-black'
				onClick={onCloseClick}
			>
				X
			</button>
			<div className='mb-4'>
				<input
					type='text'
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					placeholder='Full name'
					className='w-full p-2 border-2 border-green-500 rounded-md'
				/>
			</div>
			<div className='mb-4'>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email ID'
					className='w-full p-2 border-2 border-green-500 rounded-md'
				/>
			</div>
			<div className='mb-4'>
				<input
					type='text'
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					placeholder='Subject'
					className='w-full p-2 border-2 border-green-500 rounded-md'
				/>
			</div>
			<div className='mb-4'>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Description'
					className='w-full p-2 border-2 border-green-500 rounded-md h-32'
				></textarea>
			</div>
			<button
				onClick={handleSubmit}
				type='submit'
				className='w-1/2 mx-auto bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-colors'
			>
				{submitText}
			</button>
		</form>
	);
};

export default FeedbackForm;
