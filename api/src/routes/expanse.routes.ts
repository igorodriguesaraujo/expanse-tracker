import { Router } from "express";

import ExpanseController from "../controllers/expanseController";

const expanseRoutes = Router();

expanseRoutes.post("/", ExpanseController.store);
expanseRoutes.get("/", ExpanseController.index);

export default expanseRoutes;
