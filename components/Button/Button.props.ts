import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
};

export type {
	Props,
};
