const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=>{
    console.log("tutorial event has occurred", num1+num2)
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter{
    constructor(name) {
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let chris = new Person("Chris");

chris.on('name', () => {
    console.log('my name is', chris.name)
});

pedro.on('name', () => {
    console.log('my name is', pedro.name)
});

// synchronous
pedro.emit('name');
chris.emit('name');