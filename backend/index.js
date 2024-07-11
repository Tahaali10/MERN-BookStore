import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import { MONGODB_URI, PORT } from './config/config.js'
import booksRoute from './routes/booksRoutes.js'

const app = express();

app.use(express.json())
app.use(cors())

// app.use(cors({
//     origin: "",
//     methods: ["POST", "GET"," DELETE", "PUT"],
//     allowHeaders: ["Content-Type"],
// }
// ))
app.get('/', (req, res) => {
    res.send("Hello")
})
app.use("/books", booksRoute)
app.listen(PORT, () => {
    console.log(`Server Connected at ${"http://localhost:" + PORT}`);
})

mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database Connected!!!");
}).catch((error) => {
    console.log(error);
})