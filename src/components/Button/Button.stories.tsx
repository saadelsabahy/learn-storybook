import { Story } from '@storybook/react';
import { FC, ReactNode } from 'react';
import Button, { ButtonProps } from './Button';

interface IButton extends ButtonProps {
	children?: ReactNode | string;
}
export default {
	title: 'form/Button',
	component: Button,
};

export const Primary = () => <Button variant='primary' />;
export const Success = () => <Button variant='success' />;
export const Danger = () => <Button variant='danger' />;

//Small.storyName = 'hello';

// using args pattern

const Template: Story<IButton> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
	variant: 'primary',
	children: 'primary with args',
};

export const PrimaryB = Template.bind({});

PrimaryB.args = {
	...PrimaryA.args,
	children: 'primaryB extend A args',
};
