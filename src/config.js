import { logger } from 'react-native-logs';
import { consoleTransport } from 'react-native-logs/dist/transports/consoleTransport';

var log = logger.createLogger({
    transport: consoleTransport,
});

if (__DEV__) {
    log.setSeverity('debug');
} else {
    log.setSeverity('error');
}

export { log };

export default {
    apiServer: {
        url: 'http://172.104.61.150/edge-eye-wms-camera/api/web/v1'
    }
};