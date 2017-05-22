/**
 * Created by iSmile on 5/22/2017.
 */

/*
* Returns the Current Date in the following format : mm/dd/yyyy
* */
const getDate = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    return mm+'/'+dd+'/'+yyyy;
};

module.exports = {
    getDate: getDate
};