import express from 'express';
const router  = express.Router();
import apiRouter from './api';


router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

router.use('/api',apiRouter)

export default router;
