
(() => {
    const topEl = document.querySelector("#topsSect");

    // define a  waypoint so animation starts when scroll to mobile-sized people svg
    var waypoint = new Waypoint({
        element: document.querySelector("#topsSect").querySelector('#people'),
        handler: function(direction) {
            console.log("scrolled to element!", this.element);

            if (this.element.offsetHeight > 0 ) {

                runAnimation(this.element, ["person"]);
            }
          
        },
        offset: 220
    });

     // define a  waypoint so animation starts when scroll to full-sized people svg
     var waypoint = new Waypoint({
        element: document.querySelector("#topsSect").querySelector('#people2'),
        handler: function(direction) {
            console.log("scrolled to element!", this.element);
            if (this.element.offsetHeight > 0 ) {

                runAnimation(this.element, ["person"]);
            }

        },
        offset: 220
    });

    function runAnimation(parent, elements) {
        //debugger;
        console.log(parent, elements);

        // get the svg ref from the parent
        innerSVG = parent.contentDocument; // svg inside of the object tag
        console.log(innerSVG);

        // run animation with Greensock
        elements.forEach(el => {
            let target = innerSVG.querySelectorAll(`.${el}`);
            console.log(target);
            TweenMax.staggerTo(target, 0.25, {fill: "#D41111", ease: Power0.easeNone, repeat: 10, repeatDelay: 0.1}, 0.1)
            
         
        });
    }
})(); 