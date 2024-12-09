import { api } from 'shared';

import { User } from '../types';

export const getUsers = async () => {
  return await api('users');
};

export const createUser = async (user: Omit<User, 'id'>) => {
  return await api('users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

export const updateUser = async (user: User) => {
  return await api(`users/${user.id}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};
