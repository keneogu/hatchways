import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import {filtered} from '../redux/studentSlice';


const Search = () => {
	const inputRef = useRef('');
	const dispatch = useDispatch();

	const handleSearch = () => {
		dispatch(filtered(inputRef.current.value));
	}
	return (
		<div>
			<input type="text" className="search" placeholder="Search by name" ref={inputRef} onChange={handleSearch}/>
		</div>
	)
}

export default Search
