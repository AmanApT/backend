import dotenv from "dotenv"
import connectToDatabase from "./db/connection.js";
dotenv.config()


connectToDatabase()