import React from 'react';
import './input.css';
type Props = {
	size: 'large' | 'medium' | 'small';
};

const Input = ({ size }: Props) => {
	return (
		<input
			type={'text'}
			className={`story-input ${size}`}
			placeholder={`write your date inside ${size} inpit`}
		/>
	);
};

export default Input;
