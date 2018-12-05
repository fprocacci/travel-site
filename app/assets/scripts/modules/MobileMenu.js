import $ from 'jquery';

class MobileMenu {
    constructor() {
        
        this.siteHeader = $(".site-header");
        /*alert("Testing from Mobile menu");*/
        this.menuIcon1 = $(".site-header__menu-icon");
        this.menuContent= $(".site-header__menu-content");
        this.events();
    }

   events() {
       this.menuIcon1.click(this.toggleTheMenu.bind(this)); /* in this case the last this is the object MobileMenu, if the bind wasn't 
       added then the this referenced in the function toggleTheMenu would be the this of the menuIcon1 */
       
   }


   /* the value of the this key word changes depending on where an when you use it 
      in this case it is the this of the element that triggered the event and in this case it is MenuIcon1.
   */
   toggleTheMenu() {
       this.menuContent.toggleClass("site-header__menu-content--is-visible");
       this.siteHeader.toggleClass("site-header--is-expanded");
       this.menuIcon1.toggleClass("site-header__menu-icon--close-x")
   }
}

export default MobileMenu;