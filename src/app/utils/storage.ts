import { User } from '../types/page';

export const getUserFromStorage = (id: number): User | null => {
  const user = localStorage.getItem(`user_${id}`);
  return user ? JSON.parse(user) : null;
};

export const saveUserToStorage = (user: User) => {
  localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
};
