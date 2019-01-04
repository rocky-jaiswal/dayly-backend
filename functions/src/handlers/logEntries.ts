import { createLogEntryInDB, getAllLogEntries } from "../models/logEntry";

export const createLogEntry = async (req, res) => {
  try {
    const result = await createLogEntryInDB({
      day: new Date(req.body.day),
      thankfulFor: req.body.thankfulFor,
      learnedToday: req.body.learnedToday,
      stressedOut: req.body.stressedOut,
      userId: req.user.id
    });
    res.status(200).json(result);
  } catch(error) {
    console.log('Error getting users', error.message);
    res.sendStatus(500);
  }
};

export const getLogEntry = async (req, res) => {
  try {
    const result = await getAllLogEntries(req.user.id);
    res.status(200).json(result);
  } catch(error) {
    console.log('Error getting users', error.message);
    res.sendStatus(500);
  }
};
