/**
 * 
 * 
 * 
 * 
 */

import { DockerContainer, DockerContainersOutput} from "../models/DockerContainers";
import { Docker } from "node-docker-api";
import dockerapi from "../../utils/docker";

interface IDockerService {
    containers(): Promise<DockerContainersOutput>;
}; // End interface IExampleService

class DockerService implements IDockerService {
    async containers(): Promise<DockerContainersOutput> {
        return await dockerapi.getContainers();
    }

} // End class ExampleService

export default new DockerService();