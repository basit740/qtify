import { useState } from 'react';
import Tab from './Tab';
const tabs = [
	{
		id: 1,
		title: 'All',
		value: 'all',
		country: 'IN',
		active: true,
	},
	{
		id: 2,
		title: 'Rock',
		value: 'rock',
		country: 'PK',
		active: false,
	},
	{
		id: 3,
		title: 'Pop',
		value: 'pop',
		country: 'US',
		active: false,
	},
	{
		id: 4,
		title: 'Jazz',
		value: 'jazz',
		country: 'AU',
		active: false,
	},
	{
		id: 5,
		title: 'Blues',
		value: 'blues',
		country: 'SA',
		active: false,
	},
];
const Tabs = ({ onClickTab }) => {
	// State to keep track of the active tab
	const [activeTab, setActiveTab] = useState(tabs[0].value);

	const handleClick = (tab) => {
		setActiveTab(tab.value);
		onClickTab(tab.country);
	};

	return (
		<ul className='flex items-center gap-7'>
			{tabs.map((tab, index) => (
				<Tab
					onClick={() => handleClick(tab)}
					key={index}
					title={tab.title}
					active={tab.value === activeTab} // Pass active state to Tab
				/>
			))}
		</ul>
	);
};

export default Tabs;
