import { Status } from 'entities/employee';

export const statusView: {
  [key in Status]: {
    title: string;
    color: string;
  };
} = {
  Working: {
    title: 'Working',
    color: '#06c603',
  },
  Vacation: {
    title: 'On Vacation',
    color: '#ff4b4b',
  },
  Business: {
    title: 'Business Trip',
    color: '#b703c6',
  },
  Lunch: {
    title: 'Lunch Time',
    color: '#eb850f',
  },
};

export const statusOptions = [
  { value: 'Business', title: statusView['Business'].title },
  { value: 'Lunch', title: statusView['Lunch'].title },
  { value: 'Vacation', title: statusView['Vacation'].title },
  { value: 'Working', title: statusView['Working'].title },
];
