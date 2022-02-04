import { GetStaticProps } from 'next';

//components
import QuizCard from '../components/QuizCard';
import Button from '../components/Button';
import { useQuery } from 'react-query';
import { getQuestion } from '../shared/api/questions';
import { useState } from 'react';
import { IQuestionsResponse } from '../shared/types/questions.type';

const MainPage = (): JSX.Element => {
	const [currentValue, setCurrentValue] = useState<string>('');
	const [isCorrect, setIsCorrect] = useState<boolean>(false);
	const [showAnswer, setShowAnswer] = useState<boolean>(false);
	const { data, isLoading, refetch } = useQuery('question', getQuestion);
	const [question, setQuestion] = useState<IQuestionsResponse[]>();
	
	const getNewQuestion = () => {
		setQuestion(data);
		setCurrentValue('');
		setShowAnswer(false);
		refetch();
	};

	const inputChange = (e) => {
		if (e.key === 'Enter' && currentValue) {
			setShowAnswer(true);
			if (currentValue.toLowerCase() === question[0].answer.toLowerCase()) 
				setIsCorrect(true);
			else 
				setIsCorrect(false);
		}
	};

	return (
		<div className='w-screen h-screen flex flex-col py-7 px-10 relative'>
			<h1 className='font-bold text-2xl w-full text-darkGray'>
				Insane quiz by
				<br />
				<a 
					className='underline text-staticPrimary'
					target='_blank'
					href='https://vk.com/xmarburx' 
					rel='noreferrer'
				>
					Artem Pivko
				</a>
			</h1>
			<div className='w-full h-full flex flex-col items-center pt-8'>
				<QuizCard 
					data={question}
					value={currentValue}
					onChange={(e) => setCurrentValue((e.target as HTMLInputElement).value)}
					onKeyPress={(e) => inputChange(e)}
					isCorrect={isCorrect}
					showAnswer={showAnswer} />
				<Button 
					className='my-8'
					onClick={getNewQuestion}
				>
					Generate
				</Button>
			</div>
		</div>
	);
};

export default MainPage;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
