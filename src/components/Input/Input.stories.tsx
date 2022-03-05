import Input from './Input';

export default {
	title: 'form/Input',
	component: Input,
};

export const Small = () => <Input size='small' />;
export const Medium = () => <Input size='medium' />;
export const Large = () => <Input size='large' />;

//Small.storyName = 'hello';
