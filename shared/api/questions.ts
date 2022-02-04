import axios from 'axios';

const getQuestion = () => {
	return axios.get('https://jservice.io/api/random').then((res) => res.data);
};

export {
	getQuestion,
};
