import axios from 'axios';
import { User } from '../types/page';

const API_URL = 'https://run.mocky.io/v3/525c9522-fb54-44b8-9ea8-0b7767d1c690';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
