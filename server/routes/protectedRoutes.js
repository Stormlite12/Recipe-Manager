import express from 'express';
import { verifyAccessToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/protected',verifyAccessToken,(req,res)=>{
    res.status(200).json({message:'You are in'});
});  

export default router;