import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAsyncStudent = createAsyncThunk("student/fetchAsyncStudent", async () => {
	try {
		const response = await axios.get('https://api.hatchways.io/assessment/students');
		console.log(response);
		return response.data;
	}catch(error) {
		return error;
	}
});

export default studentSlice.reducer;

