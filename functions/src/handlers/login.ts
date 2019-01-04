import * as jwt from 'jsonwebtoken';

import { jwtKey } from '../config/secretKeys';
import { findOrCreateUserById } from '../models/user';

export const login = async (req, res) => {
  try {
    const result = await findOrCreateUserById(req.body.userId)
    const token = jwt.sign(result, jwtKey);
    res.send({ token });
  } catch (error) {
    res.sendStatus(401);
  }
};
