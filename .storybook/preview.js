// .storybook/preview.js

import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
import React from 'react';
import Center from '../src/components/center/Center.tsx';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	chakra: {
		theme,
	},
};
export const decorators = [
	(Story) => (
		<Center>
			<Story />
		</Center>
	),
];
