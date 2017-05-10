/**
 * Created by iSmile on 5/10/2017.
 */
const cloudant = require('./lib/cloudant');

cloudant.searchBySelector('user-history', {email: 'k@m.com'})
    .then(data => console.log(data))
    .catch(err => console.log(err));