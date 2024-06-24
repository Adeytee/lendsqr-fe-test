import axios from 'axios';
import { User } from '../types/page';

const API_URL = 'https://run.mocky.io/v3/f7b96c1c-58ee-4117-95bc-1cc0f6107e91';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
