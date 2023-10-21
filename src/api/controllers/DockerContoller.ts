/**
 * 
 * 
 * 
 * 
 */

import { Request, Response } from "express";

import Logger from "../../utils/logger";
import DockerService from "../services/DockerService";

class DockerContoller {
    async getContainers(
        req: Request,
        res: Response
    ): Promise<void> {
        Logger.debug(`Route /api/v1/docker/containers reached`);
        try {
            res.status(200).send(await DockerService.containers());
        } catch (error) {
            res.status(401).send({
                message: 'Error with docker server',
            });
        } // End try catch

    } // End login
} // End class AuthController

export default new DockerContoller();