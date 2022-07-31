import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const initialState = {
	student: {},
	studentContainer: {},
	isLoading: false,
	isError: false,
}

const studentSlice = createSlice({
	name: 'student',
	initialState,
	reducers: {
		filtered: (state, {payload}) => {
			state.student.students = state.studentContainer.students.filter(stu => stu.firstName.toLowerCase().includes(payload) || stu.lastName.toLowerCase().includes(payload));
		}
	},
	extraReducers: {
		[fetchAsyncStudent.pending]: (state) => {
			state.isLoading = true;
			console.log("Pending");
		},
		[fetchAsyncStudent.fulfilled]: (state, { payload }) => {
			console.log(state);
			console.log("fetched successfully");
			state.student = payload;
			state.studentContainer = payload;
		},
		[fetchAsyncStudent.rejected]: (state) => {
			state.isError = true;
			console.log("Rejected");
		},
	},
});

export const getAllStudents = (state) => state.student.student;
export const getLoading = (state) => state.student.isLoading;
export const getError = (state) => state.student.isError;
export const { filtered } = studentSlice.actions;

export default studentSlice.reducer;
