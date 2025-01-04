import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';
import mongoose from 'mongoose';
dbConnect();
// mongoose.connect('mongodb+srv://kalyan:Kalyan123*@cluster0.3vdqi4q.mongodb.net/');

const app = express();
// Middleware to parse incoming JSON requests
app.use(express.json()); // Parses application/json bodies

// Middleware to parse URL-encoded data (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})