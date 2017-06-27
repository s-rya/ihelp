/**
 * Created by iSmile on 5/10/2017.
 */
const cloudant = require('cloudant');
const config = require('../config/config');

const cloudantConnector = cloudant(config.cloudant);

/*
 * This method is used to Query the Cloudant using selector
 *
 * @param dbName {String} - Name of the database where to search
 * @param searchQuery {Object} - Search criteria
 *
 * @return {Array} - Array of documents
 * */
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

/*
 * This method is used to Create or Update a document is Cloudant
 *
 * @param dbName {String} - Name of the database where to search
 * @param doc {Object} - Document which needs to be created or updated. If a doc needs to be updated then '_id' & '_rev' should be passed.
 * */
const createDoc = (dbName, doc) => {
    const db = cloudantConnector.db.use(dbName);
    return db.insert(doc).then(data => Promise.resolve(data))
        .catch(err => Promise.reject(err))
};

/*
* This method returns all the document form the Database
*
* @param dbName {String} - Name of the database where to search
*
* @return {Array} - Array of documents
 * */
const getAllDocuments = dbName => {
    const db = cloudantConnector.db.use(dbName);
    return db.list({include_docs: true})
        .then(data => {
            let docArray = [];
            if (data.total_rows && data.total_rows > 0 && data.rows && data.rows.length > 0) {
                data.rows.forEach(row => {
                    docArray.push(row.doc);
                });
                return Promise.resolve(docArray);
            } else {
                return Promise.resolve(docArray);
            }
        })
        .catch(err => {
            return Promise.reject(err);
        })
};

module.exports = {
    searchBySelector: searchBySelector,
    createDoc: createDoc,
    getAllDocuments: getAllDocuments
};