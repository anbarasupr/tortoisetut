// Revealing module pattern  - Singleton
/*
    It is immediately executing the function and assigning the returned object to variable.
    Here, the module instance is created as soon as the script file is referenced and only one instance is created for the app.
*/
var singletonRMPattern = function () {
    var message = 'Welcome to the singleton game!';
    function printMessage() {
        console.log(message);
    }
    /*
    * return an object that represents our new module. 
    * It contains properties (showMessage) which map to function (printMessage) declared to the private portion of modules.
    * public api which reveals our private members and we can control 
    which private portions the module want to expose

    */
    return {
        showMessage: printMessage
    };
}(); // see the immediately invoked method signature is added. so the instance will be created and assigned to a variable immediately.

// Constructor module pattern  - Constructor
/*
    Capitalise the name of the function variable. Strictly speaking, it is not required but recommended.
    It is no longer immediately executing the function
    It is actually assigning the function definition to a variable which can be invoked later time and create multiple instances as needed.
    Here, no module instance is created as soon as the script file is referenced.
*/
var ConstructorRMPattern = function () {
    var message = 'Welcome to the constructor game!';
    function printMessage() {
        console.log(message);
    }

    return {
        showMessage: printMessage
    };
}; // see the immediately invoked method signature is not added here. so the instance will not be created and assigned to a variable immediately.


//  Note: Above rmp patterns, when invoked, it returns an anonymous object which we call it as public api that exposes the properties to private members of the module


// below is not a module pattern. It is a constructor class which creates Person type when invoked using new but above patters return anonymous object which we call it as public api that exposes the properties to private members of the module
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.nationality = 'Indian';
    this.name = function () {
        return this.firstName + " " + this.lastName;
    }
    this.changeName = function (name) {
        this.lastName = name;
    }
}





singletonRMPattern.showMessage();

// create the instances
var constructorRMPatternInstance1 = new ConstructorRMPattern();
constructorRMPatternInstance1.showMessage();
var constructorRMPatternInstance2 = new ConstructorRMPattern();
constructorRMPatternInstance2.showMessage();


console.log(constructorRMPatternInstance1);
console.log(constructorRMPatternInstance2);
var person = new Person('anbu','kumar',32,'white');
console.log('person', person);


