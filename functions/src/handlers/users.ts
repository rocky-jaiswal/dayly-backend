import { getAllUsersFromDB } from "../models/user";

export const getAllUsers = async (req, res) => {
  try {
    const result = await getAllUsersFromDB();
    res.status(200).json(result);
  } catch(error) {
    console.log('Error getting users', error.message);
    res.sendStatus(500);
  }
};
