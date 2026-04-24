import express from "express";
import {  readAllUsers } from "./controllers/UserController";
import { postCalcado } from "./controllers/CalcadoController";
import { getCalcado } from "./controllers/CalcadoController"; 
import { updateCalcado } from "./controllers/CalcadoController";
import { deleteCalcado } from "./controllers/CalcadoController";

const routes = express.Router();

routes.get("/users", readAllUsers);
routes.post("/calcados", postCalcado);   
routes.get("/calcados", getCalcado);
routes.patch("/calcados/:id", updateCalcado);
routes.delete("/calcados/:id", deleteCalcado);

export default routes;