'use strict';

const {Customer} = require('../model/user');
const Promise = require("es6-promise");
const accountSid = "AC1a49525455b1d17d064aa5f34a7e4764";
const authToken = "4628234bc03cef7a1258687794220a45";
const client = require('twilio')(accountSid, authToken);

let call_data;
let makeCall = (request) => {
    const promise = new Promise((resolve,reject) => {
        Customer.customerModel.create({
            from : request.payload.from,
            to:request.payload.to
        },(err,data) => {
            if(err) {
                reject(err);
            } else {

     

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+91' + request.payload.from,
         from: '+91' + request.payload.to
       })
      .then(call =>{
          call_data = call;
         console.log(" Hello ",call.sid)
      }
         );

                let response_object = {
                    statusCode : 200,
                    message :" Created Successfully",
                    result : call_data
                };
                resolve(response_object);
            }
        } )
    });
    return promise;
}



let makeCallWithRecording = (request) => {
    const promise = new Promise((resolve,reject) => {
        Customer.customerModel.create({
            from : request.payload.from,
            to:request.payload.to
        },(err,data) => {
            if(err) {
                reject(err);
            } else {

     

client.calls
      .create({
          record : true,
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+91' + request.payload.from,
         from: '+91' + request.payload.to
       })
      .then(call =>{
          call_data = call;
         console.log(" Hello ",call.sid)
      }
         );

                let response_object = {
                    statusCode : 200,
                    message :" Created Record Successfully",
                    result : call_data
                };
                resolve(response_object);
            }
        } )
    });
    return promise;
}


let allCustomer = () => {
    const promise = new Promise((resolve,reject) => {
        Customer.customerModel.find({},(err,data) => {
            if(err) {
                reject(err);

            } else {
                let response_object = {
                    statusCode : 200,
                    customerList : data
                };
                resolve(response_object);
            }
        })
    });
    return promise;
}



module.exports.Customer = {
    makeCall,
    allCustomer,
    makeCallWithRecording
}