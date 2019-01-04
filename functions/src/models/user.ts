import db from "./db";

export const getAllUsersFromDB = async () => {
  const result = [];
  const users = await db.collection('users').get();
  users.forEach(u => result.push(u.data()));
  return result;
};

export const findUserById = async (userId: string) => {
  const result = [];
  const snapshot = await db.collection('users').where('id', '==', userId).get();
  snapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
};

export const findOrCreateUserById = async (userId: string) => {
  const result = await findUserById(userId);
  if (result.length !== 0 && result[0]) {
    return result[0];
  } else {
    const newUser = await db.collection('users').add({ id: userId });
    return { id: newUser.id };
  }
};
