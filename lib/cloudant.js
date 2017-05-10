/**
 * Created by iSmile on 5/10/2017.
 */
const cloudant = require('cloudant');
const config = require('../config/config');

const cloudantConnector = cloudant(config.cloudant);

const searchBySelector = (dbName, searchQuery) => {
    const db = cloudantConnector.db.use(dbName);
    return db.find({selector: searchQuery})
        .then(data => {
            let docs = data.docs;
            if (docs && docs.length > 0) {
                return Promise.resolve(docs);
            } else {
                return Promise.resolve();
            }
        }).catch(err => {
            return Promise.reject(err);
        })
};

module.exports = {
    searchBySelector: searchBySelector
};