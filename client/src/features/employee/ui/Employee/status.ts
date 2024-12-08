import { Status } from '../../model/user';

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
};

export const statusOptions = [
  { value: 'Working', title: statusView['Working'].title },
  { value: 'Vacation', title: statusView['Vacation'].title },
  { value: 'Business', title: statusView['Business'].title },
];
