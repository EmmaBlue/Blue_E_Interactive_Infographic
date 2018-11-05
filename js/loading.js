


/*(() => {
    console.log("hello");

    // define a  waypoint and run some animation
    var waypoint = new Waypoint({
        element: document.querySelector("#clientAccess").querySelector('#ninety-four'),
        handler: function(direction) {
            console.log("scrolled to element!", this.element);


                runAnimation(this.element, ["st0"]);
          
        },
        offset: 200
    });

    function runAnimation(parent, elements) {
        //debugger;
        console.log(parent, elements);

        // get the svg ref from the parent
        innerSVG = parent.contentDocument; // svg inside of the object tag
        console.log(innerSVG);

        // run an animation with Greensock
        elements.forEach(el => {
            let target = innerSVG.querySelector(`.${el}`);
            console.log(target);
            target.style.cssText = "stroke-dasharray: 150,200; stroke-dashoffset: -10; -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;stroke-linecap: round;";
         
        });
    }
})(); */