import "reflect-metadata";
import express, { Request, Response, NextFunction, Router, ErrorRequestHandler, RequestHandler } from "express";
import writerRouter from "./routes/Writer.routes";
import bookRouter from "./routes/Book.routes";
import { AppDataSource } from "./config/database";

const app = express();
app.use(express.json());

const healthCheck: RequestHandler = (_req, res) => {
    res.json({ ok: true });
};

const notFoundHandler: RequestHandler = (_req, res) => {
    res.status(404).json({ message: "Not Found" });
};

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
};

app.get("/health", healthCheck);
app.use("/writers", writerRouter as Router);
app.use("/books", bookRouter as Router);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;