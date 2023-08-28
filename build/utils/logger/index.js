"use strict";
/**
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const winston = require("winston");
const application_config_1 = require("../../config/application.config");
// Logger Levels
const logger_levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};
// Logger Colours
const logger_colours = {
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    http: 'magenta',
    debug: 'green'
};
/**
 *
 * @returns String if debug is enabled
 */
function logger_level() {
    return application_config_1.is_development ? 'debug' : 'http';
}
winston.addColors(logger_colours);
// String Format
const logger_format = winston.format.combine(winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss:ms' }), winston.format.colorize({ all: true }), winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
// Logger Transport
const logger_transport = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error'
    }),
    new winston.transports.File({
        filename: 'logs/all.log'
    })
];
// Create Winston Logger
const Logger = winston.createLogger({
    level: logger_level(),
    levels: logger_levels,
    format: logger_format,
    transports: logger_transport
});
exports.default = Logger;
