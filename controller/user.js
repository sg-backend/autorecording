'use strict';

const {Customer} = require('../factory/user');


let customerMakeCall = () => {
    return {
        handler : (request,h) => {
            let response = Customer.makeCall(request);
            return response.then((value) => {

                return value;
            }).catch((err) => {
                console.log("Error" , err);
                return err;
                
            })
        }
    }
}


let AllCustomer = () => {
    return {

        handler : (request,h) => {
            let response = Customer.allCustomer();
            return response.then((value) => {

                return value;
            }).catch((err) => {
                console.log("Error" , err);
                return err;
                
            })
        }
    }
}

let customerMakeCallWithRecording = () => {
    return {
        handler : (request,h) => {
            let response = Customer.makeCallWithRecording(request);
            return response.then((value) => {

                return value;
            }).catch((err) => {
                console.log("Error" , err);
                return err;
                
            })
        }
    }
}


module.exports.Customer = {
    customerMakeCall,
    AllCustomer,
    customerMakeCallWithRecording
}