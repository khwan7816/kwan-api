import { Router } from 'express';
import UserRouter from './Users';
import dotenv from 'dotenv';

// Init router and path
const router = Router();

dotenv.config();
console.log(process.env.NODE_ENV)
console.log(process.env.PORT)
console.log(process.env.HOST)

// Add sub-routes
router.use('/users', UserRouter);

// Export the base-router
export default router;
