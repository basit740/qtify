let classes = '';
const Tab = ({ active, title, onClick }) => {
	classes =
		'font-medium text-base cursor-pointer pb-3 text-white border-b-2 border-secondary';
	if (active) {
		classes +=
			'font-medium text-base cursor-pointer pb-3 text-white border-b-2 border-primary';
	} else {
		classes =
			'font-medium text-base cursor-pointer pb-3 text-white border-b-2 border-secondary';
	}

	return (
		<>
			<li className={classes} onClick={onClick}>
				{title}
			</li>
		</>
	);
};

export default Tab;
