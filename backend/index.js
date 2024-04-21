import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//         origin: 'http://localhost:',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get("/", (req, res) => {
    // console.log(req);
    return res.status(234).send("Welcome to book store project");
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log(error);
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})