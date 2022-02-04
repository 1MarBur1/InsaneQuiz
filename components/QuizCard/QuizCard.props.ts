import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: object;
	isCorrect: boolean;
	showAnswer: boolean;
	value: string;
};

export type {
	Props,
};
