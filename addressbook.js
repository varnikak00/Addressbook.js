//UC 1 Creating addressbook
class Contact{
    //properties
    FirstName;
    LastName;
    Address;
    City;
    State;
    Zip;
    PhoneNumber;
    Email;

    //constructor with undefiend number of parameters
    constructor(...params){
        this.FirstName = params[0];
        this.LastName = params[1];
        this.Address = params[2];
        this.City = params[3];
        this.State = params[4];
        this.Zip = params[5];
        this.PhoneNumber = params[6];
        this.Email = params[7];
    }

    //UC 2 A
    get firstName(){ return this.FirstName;}
    set firstName(fname){
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$");
        if( nameRegex.test(fname)){
            this.FirstName = fname;
        }
        else{
            throw "Name is incorrect format";
        }
    }

    get lastName(){ return this.LastName;}
    set lastName(lname){
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$");
        if( nameRegex.test(lname)){
            this.LastName = lname;
        }
        else{
            throw "Name is incorrect format";
        }
    }
    //UC 2
    get address() { return this.Address;}
    set address(add) {
        let addRegex = new RegExp("^[A-Za-z]{4,}$");
        if( addRegex.test(add)){
            this.Address = add;
        }
        else{
            throw "Address is incorrect format";
        }
    }

    get city() { return this.City;}
    set city(cityName) {
        let cityRegex = new RegExp("^[A-Za-z]{4,}$");
        if( cityRegex.test(cityName)){
            this.City = cityName;
        }
        else{
            throw "City is incorrect format";
        }
    }
    get state() { return this.State;}
    set state(stateName) {
        let stateRegex = new RegExp("^[A-Za-z]{4,}$");
        if( stateRegex.test(stateName)){
            this.State = stateName;
        }
        else{
            throw "State is incorrect format";
        }
    }
    //UC 2 C
    get zip(){return this.Zip;}
    set zip(zipNo){
        let zipRegex = new RegExp("^[1-9][0-9]{5}$");
        if(zipRegex.test(zipNo)){
            this.Zip = zipNo;
        }else{
            throw "zip code is incorrect format";
        }
    }

    get phoneNumber(){ return this.PhoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^[0-9]{2}\s[0-9]{10}$");
        if(phoneRegex.test(phoneNo)){
            this.PhoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is incorrect format";
        }
    }
    get emailValidation(){ return this.Email;}
    set emailValidation(email){
        let emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*");
        if(emailRegex.test(email)){
            this.Email = email;
        }else{
            console.log("Email is incorrect format");
        }
    }
}
let contact1 = new Contact("varnika","mulanurr","Tirupur","Tamilnadu","Maharashtra","400015","91 9920036999","varnikak08.com");
console.log(contact1.firstName);
