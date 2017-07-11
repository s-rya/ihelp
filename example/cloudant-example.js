/**
 * Created by iSmile on 5/10/2017.
 */
const cloudant = require('../lib/cloudant');
let docsArray = [
    {
        name: "iSmile"
    },
    {
        name: "uSmile"
    },
    {
        name: "weSmile"
    }
];

cloudant.searchBySelector('user-history', {email: 'k@m.com'})
    .then(console.log)
    .catch(console.log);

cloudant.createDatabase('test-db')
    .then(console.log)
    .catch(console.log);

cloudant.deleteDatabase('test-db')
    .then(console.log)
    .catch(console.log);

cloudant.createDoc('test-db', docsArray[1])
    .then(console.log)
    .catch(console.log);

cloudant.bulkOperation('test-db',docsArray)
    .then(console.log)
    .catch(console.log);

cloudant.getAllDocuments('test-db')
    .then(console.log)
    .catch(console.log);

