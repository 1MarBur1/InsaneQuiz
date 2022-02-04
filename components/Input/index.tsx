import { useState } from 'react';
import { Props } from './Input.props';
import { INPUT_COMMON_STYLES, LABEL_COMMON_STYLES, getAdditionalStyles } from './Input.styles';

const Input = ({ className = '', placeholder, value, ...props }: Props): JSX.Element => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const onFocusOnBlur: any = {
		onFocus: () => setIsFocus(true),
		onBlur: () => setIsFocus(false),
	};

	return(
		<div className={className + ' h-16 relative'}>
			<label 
				className={LABEL_COMMON_STYLES + ((isFocus || value) ? ' mt-2 text-xs':' mt-4')} 
			>
				{placeholder}
			</label>
			<input
				{...onFocusOnBlur}
				className={INPUT_COMMON_STYLES + ' ' + getAdditionalStyles(isFocus)} 
				value={value}
				{...props} />
		</div>
	);
};

export default Input;
