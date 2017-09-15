/**
 * Created by iSmile on 5/10/2017.
 */
//Config values for Cloudant Service
const cloudant = {
    account: "844d8c57-58b6-4391-8b52-50492bc81db2-bluemix",
    password: "acbb0d4c8c5a251db060d3890fc929afbb732c80ff7af948db5d4db512f327ea",
    plugin: 'promises'
};

//Config Values for SMTP mail
const mail = {
    service: 'Gmail',
    auth: {
        user: 'ismile.ibm@gmail.com',
        pass: 'ibm@1234'
    }
};

//Config values for MySQL
const mySql = {
    host: "bluemix-sandbox-dal-9-portal.0.dblayer.com",
    port: "22085",
    user: "admin",
    password: "KVKPMVNMVJFDVPRF",
    database: "compose"
};


module.exports = { cloudant, mail, mySql };