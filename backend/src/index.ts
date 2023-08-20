import 'tsconfig-paths/register';
import express, { Application, json } from "express";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from 'cookie-parser'
import createDb from "@models/db";
import authRoutes from '@routes/auth.routes';
import pathResolve from '@lib/pathResolve';

config({
  path: pathResolve('../.env')
})

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT)
const app: Application = express();

app.use(json());

app.use(cookieParser())


app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use('/auth', authRoutes)

const start = () => {
  app.listen(PORT, () => console.log(`Server start on port - ${PORT}`));
};

const pool = createDb()

start();

export default pool 
