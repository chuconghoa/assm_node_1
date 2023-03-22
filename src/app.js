import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routers/product";
 const app = express();
 app.use(express.json());
 app.use("/api",productRoutes);
 mongoose.connect('mongodb://127.0.0.1:27017/node');
export const viteNodeApp = app;