import { Button } from '@chakra-ui/react';

export default {
	title: 'chakra/Button',
	component: Button,
};

export const Solid = () => (
	<Button bgColor={'green'} variant='solid'>
		ChakraButton
	</Button>
);
export const Outline = () => <Button variant='outline'>ChakraButton</Button>;
export const Ghost = () => <Button variant='ghost'>ChakraButton</Button>;
export const Link = () => <Button variant='link'>ChakraButton</Button>;
