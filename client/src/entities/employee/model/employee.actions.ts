import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, getUsers, updateUser } from '../api/employee';
import { User } from '../types';

const PREFIX = '@employee';

export const SET_EMPLOYEES = `${PREFIX}/SET_EMPLOYEES`;
export const ADD_EMPLOYEE = `${PREFIX}/ADD_EMPLOYEE`;
export const UPDATE_EMPLOYEE = `${PREFIX}/UPDATE_EMPLOYEE`;
export const GET_EMPLOYEES = `${PREFIX}/GET_EMPLOYEES`;

export const setEmployees = createAction<User[]>(SET_EMPLOYEES);

const sortEmployees = (employees: User[]) => {
  return employees.sort(function (employeeA, employeeB) {
    if (employeeA.name < employeeB.name) {
      return -1;
    }
    if (employeeB.name > employeeA.name) {
      return 1;
    }
    return 0;
  });
};

export const getEmployees = createAsyncThunk(GET_EMPLOYEES, async (_, { dispatch }) => {
  const employees = await getUsers();

  dispatch(setEmployees(sortEmployees(employees)));
});

export const createEmployee = createAsyncThunk(ADD_EMPLOYEE, async (user: Omit<User, 'id'>, { dispatch }) => {
  const employees = await createUser(user);

  dispatch(setEmployees(sortEmployees(employees)));
});

export const updateEmployee = createAsyncThunk(UPDATE_EMPLOYEE, async (user: User, { dispatch }) => {
  const employees = await updateUser(user);

  dispatch(setEmployees(sortEmployees(employees)));
});
