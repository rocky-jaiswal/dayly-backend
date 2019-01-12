import db from "./db";

export const createLogEntryInDB = async (logEntry) => {
  return db.collection('logEntries').add(logEntry);
};

export const getAllLogEntries = async (userId) => {
  const result = [];
  const snapshot = await db.collection('logEntries').where('userId', '==', userId).get();
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (typeof data.thankfulFor === 'string') {
      data.thankfulFor = data.thankfulFor.split("\n");
    }
    if (typeof data.learnedToday === 'string') {
      data.learnedToday = data.learnedToday.split("\n");
    }
    if (typeof data.stressedOut === 'string') {
      data.stressedOut = data.stressedOut.split("\n");
    }
    result.push(data);
  });
  return result.sort((data1, data2) => data1.day - data2.day);
};
