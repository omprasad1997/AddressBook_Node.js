class Contact {
    _firstName;
    _lastName;
    _address;
    _city;
    _state;
    _zip;
    _phoneNumber;
    _email;

    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;

    }

    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }

    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }

    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }

    get zip() {
        return this._zip;
    }
    set zip(value) {
        this._zip = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    showDetails() {
		console.log("First Name: " + this.firstName + "\nLast Name: " + this.lastName + "\nAddress: " + this.address + "\nCity: "+this.city +
                                                        "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber
                                                        + "\nEmail: " + this.email + "\n");
	}
}

const prompt = require('prompt-sync')();

let contacts = new Array();
let dMart    = new Contact("Pushpak","Ghatode","Kailash Nagar","Pune","Maharashtra","400001","384792876","abc@gmail.com");
let Jio      = new Contact("Ganesh","Wattamwar","Shivaji Nagar","Nanded","Maharashtra","400006","789192876","abc@yahoo.com");

contacts.push(dMart);
contacts.push(Jio);
console.log("-----------------------------------------------------------Welcome to Address Book Manangement System--------------------------------------------------------\n");

let check = true;

while(check)
    {
        console.log("1.Add contacts");
        console.log("2.Show Conact details");
        console.log("3.Exit")
let choice = Number(prompt('Enter Choice:'));
console.log();
switch(choice){
    case 1:{
        try{
            let firstName = prompt('First Name:');     
            if(RegExp('^[A-Z]{1}[a-z]{2,}$').test(firstName)){
                let lastName  = prompt('Last Name:');
                if(RegExp('^[A-Z]{1}[a-z]{2,}$').test(lastName)){
                    let address   = prompt('Address:');  
                    if(RegExp('^[a-zA-Z]{1}[a-z]{3,}$').test(address)){
                        let city      = prompt('City:');
                        if(RegExp('^[a-zA-Z]{1}[a-z]{3,}$').test(city)){
                            let state     = prompt('State:'); 
                            if(RegExp('^[a-zA-Z]{1}[a-z]{3,}$').test(state)){
                                let zip       = prompt('Zip:');
                                if(RegExp('^[0-9]{6,6}$').test(zip)){
                                    let phoneNumber = prompt('Phone number:'); 
                                    if(RegExp('^[1-9]{1}[0-9]{9,9}$').test(phoneNumber)){
                                        let email       = prompt('Email:'); 
                                        if(RegExp('^(abc)?(.+)@(.+)([.](com))?([^.])$').test(email)){
                                                let input = new Contact(firstName,lastName,address,city,state,zip,phoneNumber,email);
                                                contacts.push(input);
                                                console.log("You have succesfully added contact !\n");
                                        }else throw "Email is incorrect";
                                    }else throw "Phone number is incorrect";
                                }else throw "zip is incorrect";
                            }else throw "state name is incorrect";
                        }else throw "city name is incorrect";
                    }else throw "Address is incorrect";
                }else throw "Last name is incorrect";
            }else throw "First name is incorrect";

        }catch (e){
            console.error(e);
        }   
        break;
    }
    case 2:{
            for(var element of contacts){
                element.showDetails();
            }
            break;
    }
    case 3:
        check = false;
        break;
    }
}


    




