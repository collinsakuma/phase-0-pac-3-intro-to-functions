// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}

sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

sayHelloToGuadalupe();
sayHelloToGuadalupe();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
}
doSomething("Ora!");
doSomething("Nothing!");

function sayHelloTo(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`)
}
sayHelloTo("Guadalupe", "Smith");

// console.log(firstName);

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}`);
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Julio", "hello");

function add(x, y) {
    return x + y;
}
console.log(add(80,9000));

function say(greeting,firstName) {
    return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz!"));

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}
console.log(say("Howdy", "partner"));

function starPlatinum(user, attack) {
    return `${user}, said ${attack}!`;
}
console.log(starPlatinum("Jotaro", "Ora"));