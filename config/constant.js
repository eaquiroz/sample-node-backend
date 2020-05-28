
let config = {
    name: "Eddie Test Server",
    version: "1.0",
    host: process.env.APP_HOST || "127.0.0.1",
    environment: process.env.NODE_ENV || "development",
    port:process.env.port || '8080',
    modelExclude:{_id:0,createdAt:0,updatedAt:0},
};

module.exports = config;
