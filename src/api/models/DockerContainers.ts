/**
 * 
 * 
 * 
 */

import { Port } from "dockerode";

export type DockerContainer = {
    container_id: string;
    names: string[];
    image: string;
    image_id: string;
    command: string;
    created: number;
    state: string;
    status: string;
    ports: Port[];
    labels: {};
    host_config: {};
    network_settings: {};
    mounts: any;
}

export type DockerContainersOutput = DockerContainer[]