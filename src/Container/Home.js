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

		if(!students) {
			return null;
		} else if (students) {
			content = students.map(student => <StudentCard key={student.id} {...student} />);
		}else if (studentLoading === true) {
			content = <p>"Loading..."</p>
		}else if(studentError === true) {
			content = <p>Error 404</p>
		}
		
	return (
		<div>
			{content}
		</div>
	)
}

export default Home
