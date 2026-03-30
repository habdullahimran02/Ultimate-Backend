import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const startServer = async () => {
	try {
		await connectDB();

		app.on("error", (error) => {
			console.error("ERROR:", error);
			throw error;
		});

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Startup error:", error);
		process.exit(1);
	}
};

startServer();