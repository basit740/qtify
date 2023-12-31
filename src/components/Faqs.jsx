import { faqs } from '../data/data.js';
import Faq from './Faq.jsx';
const Faqs = () => {
	return (
		<div>
			{faqs.map((faq, index) => (
				<Faq key={index} faq={faq} />
			))}
		</div>
	);
};

export default Faqs;
