import $ from 'jquery';  /* need to have jquery in node_modules folder */

import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class RevealOnScroll {
    constructor(elements1, offset)
    {
        
        this.itemsToReveal = elements1;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
       
    }

    hideInitially() {
      
        this.itemsToReveal.addClass("reveal-item");

    } 

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    
                    $(currentItem).removeClass("reveal-item");
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }

}

export default RevealOnScroll;