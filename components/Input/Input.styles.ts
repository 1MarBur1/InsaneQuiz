const INPUT_COMMON_STYLES = ' bg-lightGray p-4 h-full outline-none absolute w-full';
const LABEL_COMMON_STYLES = ' absolute z-10 text-darkGray left-4 duration-200';

function getAdditionalStyles(isFocus: boolean | undefined): string {
	let classes = ['border-2', 'rounded-2xl'];
	
	if(isFocus) 
		classes.push('border-staticPrimary');
	
	else
		classes.push('border-lightGray');
			
	return classes.join(' ');
}

export {
	INPUT_COMMON_STYLES,
	LABEL_COMMON_STYLES,
	getAdditionalStyles,
};
