import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import recipeRoutes from './routes/recipesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ limit:'10mb',extended: true }));
app.use(cors({
  origin: 'https://recipe-manager-lbkl.onrender.com',  // specify your frontend URL here
  credentials: true,  // allow cookies to be sent with the request
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

app.use('/api/user', userRoutes);
app.use('/api', protectedRoutes);


app.get('/', (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});