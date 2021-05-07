'use strict';

const {Customer} = require('../controller/user');


const common_array = [

    /** all route of user  */
    {method :"POST" , path:"/customer" , options : Customer.customerMakeCall()},
    {method :"POST" , path:"/recording" , options : Customer.customerMakeCallWithRecording()},

    {method :"GET" , path:"/allcustomer" , options : Customer.AllCustomer()}

]

module.exports = {
    common_array
}