import { useState } from 'react';
import imgArrowUp from '../assets/arrow-up.png';
import imgArrowDown from '../assets/arrow-down.png';

const Faq = ({ faq }) => {
	const { question, answer } = faq;
	const [expanded, setExpanded] = useState(false);
	return (
		<div className='rounded-md text-xl font-medium text-white border-2 bg-white overflow-hidden mb-6'>
			<div className='flex justify-between py-6 px-8 bg-black'>
				<p>{question}</p>
				<button
					className='border-none inline-block cursor-pointer'
					onClick={() => setExpanded(!expanded)}
				>
					<img src={expanded ? imgArrowUp : imgArrowDown} alt='faq action' />
				</button>
			</div>
			{expanded && <p className='bg-white py-6 px-8 text-black'>{answer}</p>}
		</div>
	);
};

export default Faq;
