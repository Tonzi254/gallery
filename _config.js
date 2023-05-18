var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://drotich:iEjHMgYNKU8vMFP2@jenkins.avjpxpk.mongodb.net/darkroom',
    development: 'mongodb+srv://drotich:iEjHMgYNKU8vMFP2@jenkins.avjpxpk.mongodb.net/darkroom-dev',
    test: 'mongodb+srv://drotich:iEjHMgYNKU8vMFP2@jenkins.avjpxpk.mongodb.net/darkroom-test',
}
module.exports = config;