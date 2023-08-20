/**
 * 
 * 
 */

// Dependencies
import * as morgan from 'morgan';
import { StreamOptions } from 'morgan';
import Logger from '../../../utils/logger';
import { node_env } from '../../../config/application.config';

const morgan_stream: StreamOptions = {
    write: (stream_message) => { Logger.http(stream_message.substring(0, stream_message.lastIndexOf('\n'))) }
};

const morgan_skip = () => {
    const env = node_env || 'development';
    return env !== 'development';
};

const MorganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { 
        stream: morgan_stream, 
        skip: morgan_skip 
    }
);

export default MorganMiddleware;