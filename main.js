// Import logging module
import { logger } from 'log'

export function onClientRequest(request) {
    // Outputs a message to the X-Akamai-EdgeWorker-onClientRequest-Log header.
    logger.log("Responding with hello world from the path: %s", request.path)

	var info = request.getVariable("PMUSER_AK_CLIENT_REAL_IP");

    request.respondWith(
        200, {},
        JSON.stringify(info))
}

export function onClientResponse(request, response) {
    // Outputs a message to the X-Akamai-EdgeWorker-onClientResponse-Log header.
    logger.log("Adding a header in ClientResponse")

	response.setHeader("Cache-Control","no-store");
	response.setHeader("Content-Type","text/plain");
}
