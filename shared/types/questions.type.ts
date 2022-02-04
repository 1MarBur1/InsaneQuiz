interface IQuestionsResponse {
	id: number;
	answer: string;
	question: string;
	value: number;
	airdate: string;
	created_at: string;
	updated_at: string;
	category_id: number;
	category: category;
};

interface category {
	id: number,
	title: string,
	created_at: string,
	updated_at: string,
	clues_count: number;
}

export type {
	IQuestionsResponse,
};
