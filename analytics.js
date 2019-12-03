import logger from "./logger";

const reportEvent = (event) => {
    logger.log("ANALYTICS", event)
};


export default { reportEvent }
