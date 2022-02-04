import Input from '../Input';
import { Props } from './QuizCard.props';

const QuizCard = ({ className = '', value, onChange, onKeyPress, isCorrect, showAnswer, data }: Props): JSX.Element => {
	const getContent = () => {
		if (showAnswer) {
			if (isCorrect) {
				return (
					<p className='mt-4 font-semibold text-green'>
						Yes! Correct
					</p>
				);
			}
			else {
				return (
					<p className='mt-4 font-semibold text-red'>
						No, correct answer is
						{' '}
						<span className='underline'>
							{data[0].answer}
						</span>
					</p>
				);
			}
		}
	};

	return(
		<div className={className + ' bg-white shadow-main rounded-xl inline-box w-full lg:w-1/2 px-9 py-10'}>
			{data ? (
				<div>
					<h1 className='font-bold text-lg'>
						Title:
						{' '}
						{data[0].category.title}
					</h1>
					<h2 className='text-darkGray font-semibold leading-5'>
						#
						{data[0].id}
						<br />
						Difficulty:
						{' '}
						{data[0].value}
					</h2>

					<p className='mt-5'>
						{data[0].question}
					</p>

					<Input 
						placeholder='Your answer'
						value={value}
						onChange={(e) => onChange(e)}
						onKeyPress={(e) => onKeyPress(e)}
						className='mt-4' />

					{getContent()}
				</div>
			) : (
				<h1>
					To generate new question press the button
				</h1>
			)}
		</div>
	);
};

export default QuizCard;
