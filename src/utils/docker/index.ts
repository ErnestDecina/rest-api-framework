import * as Docker from 'dockerode';
import { docker_api_host, docker_api_socket_path } from "../../config/docker_api.config";
import { DockerContainersOutput, DockerContainer } from '../../api/models/DockerContainers';
import Logger from '../logger';
import { token } from 'morgan';

export const docker_api = new Docker(
    {
        socketPath: docker_api_socket_path
    }
);

class DockerAPI {
    getContainers(): Promise<DockerContainersOutput> {
        var docker_containers: DockerContainersOutput = [];

        return new Promise( (resolve, reject) => {
            docker_api.listContainers((err, res) =>{
                if(err) {
                    Logger.error(`Docker API Error: ${err}`);
                    reject(err);
                }

                res?.forEach(container => {
                   const docker_container: DockerContainer = {
                       container_id: container.Id,
                       names: container.Names,
                       image: container.Image,
                       image_id: container.ImageID,
                       command: container.Command,
                       created: container.Created,
                       state: container.State,
                       status: container.Status,
                       ports: container.Ports,
                       labels: container.Labels,
                       host_config: container.HostConfig,
                       network_settings: container.NetworkSettings,
                       mounts: container.Mounts
                   }
                   
                   docker_containers.push(docker_container);
                });

                resolve(docker_containers);
            });
        });
    }
}


export default new DockerAPI();