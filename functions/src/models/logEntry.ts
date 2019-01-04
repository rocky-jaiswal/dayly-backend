import db from "./db";

export const createLogEntryInDB = async (logEntry) => {
  return db.collection('logEntries').add(logEntry);
};

export const getAllLogEntries = async (userId) => {
  const result = [];
  const snapshot = await db.collection('logEntries').where('userId', '==', userId).get();
  snapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
};
