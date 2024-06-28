import axios from "axios";
import { User } from "../types";

const API_URL = "https://run.mocky.io/v3/c2312ba3-352d-45ec-88da-00c773e673e0";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserDetails = async (id: string): Promise<User | null> => {
  try {
    const response = await axios.get(API_URL);
    const users: User[] = response.data;
    const user = users.find((user) => user.id === id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    return user;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
