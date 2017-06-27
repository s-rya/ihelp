/**
 * Created by iSmile on 5/10/2017.
 */
const cloudant = require('../lib/cloudant');

cloudant.searchBySelector('user-history', {email: 'k@m.com'})
    .then(console.log)
    .catch(console.log);

cloudant.createDoc('discovery-collection', {appName: 'list_of_application', appList: []})
    .then(console.log)
    .catch(console.log);

cloudant.getAllDocuments('users')
    .then(console.log)
    .catch(console.log);