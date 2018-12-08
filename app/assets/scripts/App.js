import $ from 'jquery';
import MobileMenu from  './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();

var x = new RevealOnScroll($ (".feature-item"), "61%");
var y = new RevealOnScroll($ (".testimonial"), "80%");

var stickyHeader = new StickyHeader();