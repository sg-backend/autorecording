'use strict';

const Mongoose = require('mongoose');


let customerSchema = new Mongoose.Schema({
  from: {type: Number},
  to : {type : Number}
   
   
})



const customerModel = Mongoose.model("Customer",customerSchema,"Customer");
module.exports.Customer = {
customerModel
}