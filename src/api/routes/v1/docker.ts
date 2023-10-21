/**
 * 
 * 
 * 
 */

import { Router } from "express";
import DockerContoller from "../../controllers/DockerContoller";
import auth from "../../middlewares/auth";

const docker_router: Router = Router();

docker_router
    .route('/containers')
    .get(auth.authenticate, DockerContoller.getContainers);

export default docker_router;