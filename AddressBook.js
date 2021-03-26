class Contact {
    _firstName;
    _lastName;
    _address;
    _city;
    _state;
    _zip;
    _phoneNumber;
    _email;

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

    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstNameRegex.test(name))
            this._firstName = name;
        else throw "First Name is Incorrect!";
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Last Name is Incorrect!";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z]{1}[a-z]{3,}$');
        if (addressRegex.test(address))
            this._address = address;
        else throw "Address is Incorrect!";
    }

    get city() {
        return this._city;
    }
    set city(cityName) {
        let cityRegex = RegExp('^[a-zA-Z]{1}[a-z]{3,}$');
        if (cityRegex.test(cityName))
            this._city = cityName;
        else throw "City name is Incorrect!";
    }

    get state() {
        return this._state;
    }
    set state(stateName) {
        let stateRegex = RegExp('^[a-zA-Z]{1}[a-z]{3,}$');
        if (stateRegex.test(stateName))
            this._state = stateName;
        else throw "State name is Incorrect!";
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6,6}$');
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw "Zip is Incorrect!";
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[1-9]{1}[0-9]{9,9}$');
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Phone number is Incorrect!";
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^(abc)?(.+)@(.+)([.](com))?([^.])$');
        if (emailRegex.test(email))
            this._email = email;
        else throw "Email is Incorrect!";
    }

    showDetails() {
        console.log("First Name: " + this.firstName + "\nLast Name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city +
            "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber
            + "\nEmail: " + this.email + "\n");
    }
}

const prompt = require('prompt-sync')();

let contacts = new Array();
console.log("-----------------------------------------------------------Welcome to Address Book Manangement System--------------------------------------------------------\n");

let check = true;
while (check) {
    console.log("1.Add contacts");
    console.log("2.Show Contact details");
    console.log("3.Edit contact");
    console.log("4.Delete contact");
    console.log("5.Check size of address book");
    console.log("6.Exit");
    let choice = Number(prompt('Enter Choice:'));
    console.log();
    switch (choice) {
        case 1: {
            try {
                
                let isPresent = false;
                let firstName = prompt('First Name:');
                let lastName = prompt('Last Name:');
                let address = prompt('Address:');
                let city = prompt('City:');
                let state = prompt('State:');
                let zip = prompt('Zip:');
                let phoneNumber = prompt('Phone number:');
                let email = prompt('Email:');
                for (let i = 0; i < contacts.length; i++) {
                    if (contacts[i]._firstName == firstName && contacts[i]._lastName == lastName && contacts[i]._address == address
                        && contacts[i]._city == city && contacts[i]._state == state && contacts[i]._zip == zip
                        && contacts[i]._phoneNumber == phoneNumber && contacts[i]._email == email) {
                        isPresent = true;
                        break;
                    }
                }
                if (!isPresent) {
                    let input = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
                    contacts.push(input);
                    console.log("You have succesfully added contact !\n");
                }
                else console.log("This contact is already exist,Please enter other name.\n");
            } catch (e) {
                console.error(e);
            }
            break;
        }
        case 2: {
            for (var contact of contacts) {
                contact.showDetails();
            }
            break;
        }
        case 3: {
            let index = 0;
            let isPresent = false;
            let tempFirstName = prompt('Enter person name do you want to edit :');
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i]._firstName == tempFirstName) {
                    isPresent = true;
                    index = i;
                    break;
                }
            }
            if (isPresent) {
                contacts[index]._firstName = prompt("First Name:");
                contacts[index]._lastName = prompt('Last Name:');
                contacts[index]._address = prompt('Address:');
                contacts[index]._city = prompt('City:');
                contacts[index]._state = prompt('State:');
                contacts[index]._zip = prompt('Zip:');
                contacts[index]._phoneNumber = prompt('Phone number:');
                contacts[index]._email = prompt('Email:');
                console.log("You have succesfully edited contact !\n");
            }
            else console.log("There is no contact of given name.");

            break;
        } case 4: {
            let index = 0;
            let isPresent = false;
            let tempFirstName = prompt('Enter person name do you want to delete :');
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i]._firstName == tempFirstName) {
                    isPresent = true;
                    index = i;
                    break;
                }
            }
            if (isPresent) {
                contacts.splice(index, 1);
                console.log("You have succesfully deleted contact !\n");
            }
            else console.log("There is no contact of given name.");

            break;
        }
        case 5: {
            console.log("Total contacts in address book : " + contacts.length);
            break;
        }

        case 6: {
            check = false;
            break;
        }
        default:
            console.log("Invalid Choice");
    }
}









