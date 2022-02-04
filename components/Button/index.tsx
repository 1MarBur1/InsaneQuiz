import { Props } from './Button.props';

const Button = ({ children, className = '', ...props }: Props): JSX.Element => {
	return (
		<button 
			className={className + ' bg-staticPrimary inline-box px-28 py-4 rounded-lg text-white font-bold'}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
