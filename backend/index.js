import express from 'express';
import mongoose from 'mongoose'; // Use only the import syntax
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => {
            console.log("Server is running on port no. " + PORT);
        });
    })
    .catch(error => {
        console.error("DB connection error:", error);
    });

    app.use("/api", route)