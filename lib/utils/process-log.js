process.on('uncaughtException', error => {
    process.cliLogger.error(`Uncaught exception: ${error}`);
    logErrorAndExit(error);
});

process.on('unhandledRejection', error => {
    process.cliLogger.error(`Promise rejection: ${error}`);
    logErrorAndExit(error);
});

function logErrorAndExit(error) {
    if (error && error.stack) process.cliLogger.error(error.stack);
    process.exit(1);
}

//TODO: implement nologger for debug