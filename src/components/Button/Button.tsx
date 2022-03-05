import React from 'react';
import './button.css';
export type ButtonProps = {
	variant: 'success' | 'primary' | 'danger';
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
	return (
		<button className={`story-button ${variant}`}>
			{children || `hell ${variant}`}
		</button>
	);
};

export default Button;
