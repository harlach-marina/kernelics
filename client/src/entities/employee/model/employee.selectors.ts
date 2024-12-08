import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const selectEmployee = (state: RootState) => state.employee;

export const selectEmployees = createSelector(selectEmployee, ({ employees }) => employees);
