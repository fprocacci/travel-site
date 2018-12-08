import $ from 'jquery';
import MobileMenu from  './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';


var mobileMenu = new MobileMenu();

var x = new RevealOnScroll($ (".feature-item"), "61%");
var y = new RevealOnScroll($ (".testimonial"), "80%");