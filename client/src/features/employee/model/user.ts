export type Status = 'Working' | 'Vacation' | 'Business';

export type User = {
  id: number,
  name: string,
  status: Status,
  img: string,
}