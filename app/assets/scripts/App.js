
var $ = require('jquery');

//var Person = require('./modules/john.js');  /* require is p/o node.js, NOT JAVASCRIPT */
import Person from './modules/john';      /* es6 way of importing a module */

import MobileMenu from  './modules/MobileMenu';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " taxes");
    }
}

/*alert("test webpack 123 8");*/

/*var john = new Adult("Felix likes blue");
john.greet();
john.payTaxes();*/

/* $("h1").remove(); */

var mobilemenu = new MobileMenu();

