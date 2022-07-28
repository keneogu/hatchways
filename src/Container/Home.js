import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAsyncStudent, getAllStudents, getLoading, getError} from '../redux/studentSlice';
import StudentCard from './StudentCard';

const Home = () => {
	const { students } = useSelector(getAllStudents);

	const studentLoading = useSelector(getLoading);
	const studentError = useSelector(getError);

	
	let content;

		
	

	return (
		<div>
			{content}
		</div>
	)
}

export default Home
