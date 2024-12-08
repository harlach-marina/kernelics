import { createSlice } from '@reduxjs/toolkit';
import { User } from 'features/employee/model/user';
import { setEmployees } from './employee.actions';

export interface Users {
  employees: User[];
}

const initialState: Users = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setEmployees, (state, { payload }) => {
      state.employees = payload;
    });
  },
});

export default employeeSlice.reducer;
