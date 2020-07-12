//import express from 'express'
const express = require('express'); 
const app = express();

const faker = require('faker');

app.use(express.json())
app.use(express.urlencoded({extend:true}))


class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.companyName = faker.company.companyName();
        this.address = faker.fake(
            '{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.zipCode}}, {{address.country}}'
            )
        /*this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state= faker.address.state();
        this.zip = faker.address.zipCode();
        this.country = faker.address.country();*/
    }
}



//console.log(new User())
//console.log(new Company())
//console.log(faker.fake("{{name.lastName}} {{name.firstName}}"))

//returns new user 
app.get('/api/users/new', (req, res)=> {
    res.json(new User)
})

//returns new company
app.get('/api/company/new', (req, res)=> {
    res.json(new Company)
})

//return new user and new company 
app.get('/api/user/company', (req, res)=> {
    res.json([new Company, new User]);
    
})
app.listen(8000, () => console.log('listening on port 8000'))