import React from 'react';
import './center.css';
type Props = {};

const Center: React.FC<Props> = ({ children }) => {
	return <div className='center'>{children}</div>;
};

export default Center;
