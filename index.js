import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();
const router = express.Router();

config({ path: "./.env" })

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}))

app.get((req, res) => { res.send({ message: "VTU server" }) })

app.listen(process.env.PORT, () => console.log("Server listening on port - ", process.env.PORT))