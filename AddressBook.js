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
let Jio      = new Contact("Pushpak","Ghatode","Kailash Nagar","Pune","Maharashtra","400001","384792876","abc@gmail.com");

contacts.push(dMart);
contacts.push(Jio);
console.log("-----------------------------------------------------------Welcome to Address Book Manangement System--------------------------------------------------------\n");

	for(let i=0;i<contacts.length;i++){
	    contacts[i].showDetails(); 
   }


    




