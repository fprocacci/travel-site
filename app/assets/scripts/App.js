import $ from 'jquery';
import MobileMenu from  './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';



var mobileMenu = new MobileMenu();

var x = new RevealOnScroll($ (".feature-item"), "61%");
var y = new RevealOnScroll($ (".testimonial"), "80%");

var stickyHeader = new StickyHeader();
var modal = new Modal();