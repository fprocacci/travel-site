function Person1(name) {
    this.name = name;
    this.greet = function() {
        console.log("hi " + this.name);
    }

}

/*
    OR class Person1 {
        constructor (name) {

        }
    }

*/

class Person {

    constructor (name) {
        this.name = name;
    }
    
    greet() {
        console.log("hi there " + "lll" + this.name);   /* this.name causes a [Violation] in the console.*/
    }

}


/* module.exports = Person; node.js way of exporting a module */

export default Person;      /* native js way of exporting a module */
