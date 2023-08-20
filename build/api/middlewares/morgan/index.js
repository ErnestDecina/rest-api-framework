"use strict";
/**
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const morgan = require("morgan");
const logger_1 = require("../../../utils/logger");
const application_config_1 = require("../../../config/application.config");
const morgan_stream = {
    write: (stream_message) => { logger_1.default.http(stream_message.substring(0, stream_message.lastIndexOf('\n'))); }
};
const morgan_skip = () => {
    const env = application_config_1.node_env || 'development';
    return env !== 'development';
};
const MorganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
    stream: morgan_stream,
    skip: morgan_skip
});
exports.default = MorganMiddleware;
