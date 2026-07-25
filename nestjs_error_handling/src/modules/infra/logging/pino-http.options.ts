import type {Options} from 'pino-http';

export const pinoHttpOptions: Options = {
    // show everything with level 'debug' and above
    level: 'debug',

    // level for auto request / response logging
    customLogLevel: (_req, res, err) => {
        if (err || res.statusCode >= 500) return 'error';
        return 'info';
    },

    // activate request logging
    customReceivedMessage: () => 'request received',

    // use pretty JSON
    transport: {
        target: 'pino-pretty', options: {
            singleLine: true
        }
    }
};
