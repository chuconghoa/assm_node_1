import express from "express";
import { create, get, getAll, update,movew } from "../controllers/product";
const routes = express.Router();
routes.post('/product',create)
routes.get('/product/:id',get)
routes.get('/product',getAll)
routes.put('/product/:id',update)
routes.delete('/product/:id',movew)
export default routes;