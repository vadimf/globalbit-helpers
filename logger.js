const enabled = true;

const log = (tag, message) => {
    if (enabled) {
        console.log(tag, message);
    }
};

const warn = (tag, message) => {
    if (enabled) {
        console.warn(tag, message);
    }
};

const error = (tag, message) => {
    if (enabled) {
        console.error(tag, message);
    }
};

export default { log, warn, error }
