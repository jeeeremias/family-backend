var config = {
    expressPort: 3000,
    client: {
        mongodb: {
            defaultDatabase: "mongofa",
            defaultCollection: "simples",
            defaultUri: "mongodb://localhost:27017"
        }
    }
};

module.exports = config;