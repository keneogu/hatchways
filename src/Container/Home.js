import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAsyncStudent, getAllStudents, getLoading, getError} from '../redux/studentSlice';
import StudentCard from './StudentCard';

const Home = () => {
	const { students } = useSelector(getAllStudents);
	console.log(students);

	const studentLoading = useSelector(getLoading);
	const studentError = useSelector(getError);

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAsyncStudent());
	},[dispatch]);

	
	let content;

		
	

	return (
		<div>
			{content}
		</div>
	)
}

export default Home
