//TODO

module.exports.handler = new ErrorHandler();

function ErrorHandler() {
    this.handleError = async err => {
        await logger.error(err);
        //Todo check error severity and send email to admin if needed
        //Todo check error is operational and crash the APP accordingly
    };
}
