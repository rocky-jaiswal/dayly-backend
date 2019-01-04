export const healthCheck = (_req, res) => {
  res.send({ healthy: true });
};
