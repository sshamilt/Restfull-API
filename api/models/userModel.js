/*
import { Address } from './address';
import { Company } from './company';

export class User {
id: number;
name: string;
username: string;
password: string;
email: string;
address: Address;
phone: string;
website: string;
company: Company;
}
*/

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    id: Number,
    name: {
        type: String,
        Required: 'Enter the full name of the user'
    },
    username: {
        type: String,
        Required: 'Enter the user name of the user'
    },
    password: {
        type: String,
        Required: 'Enter the password of the user'
    },
    email: {
        type: String,
        Required: 'Enter the email of the user'
    },
    phone: String,
    website: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String
        }
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}, { collection: 'User' });

module.exports = mongoose.model('User', UserSchema);