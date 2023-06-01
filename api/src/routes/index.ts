import { Router } from "express";

import userRouter from "./user.routes";
import expanseRoutes from "./expanse.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/expanses", expanseRoutes);

export default routes;
