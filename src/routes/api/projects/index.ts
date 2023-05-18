import express from 'express';
const router = express.Router();

router.get('/', (_req,res)=>{
    res.json({version:2, scope:'Hola proyects'});
});

export default router;