
(() => {

  // This doesn't work in Firefox because the browser doesn't support clipPath
  // Need to rewrite with jQuery to animate jQuery's attr and make this cross-browser 

  // Declare variables for mobile and full-sized heartbeat image 

  let mobileHomeBeat = document.querySelector('#beat1');
  let fullHomeBeat = document.querySelector('#beat2');

  function mobileAnimate() {
        console.log("home page mobile heart beat triggered!");

        var duration = 2,
            lineWidth = 767,
            rect1 = document.querySelector("#svgRect"),
            start = new TimelineMax({paused: true});
        let compStyles = window.getComputedStyle(mobileHomeBeat);

        // If mobile image displayed, animate it
        if (compStyles.getPropertyValue('display') === 'block') {

            start.to(rect1, duration, {width: lineWidth, ease: Power0.easeNone}, 2);
            start.restart();
        }           
    }

    function fullAnimate() {
      console.log("home page full sized heart beat triggered!");

          duration2 = 3,
          lineWidth2 = 2000, 
          rect2 = document.querySelector("#svgRect2"),
          start2 = new TimelineMax({paused: true});
        
        let compStyles = window.getComputedStyle(fullHomeBeat);

        // If full sized image displayed, animate it
        if (compStyles.getPropertyValue('display') === 'block') {
           start2.to(rect2, duration2, {width: lineWidth2, ease: Power0.easeNone}, 2);
           start2.restart();
      }
             
  }

  // Animate when homepage heartline image loads
    mobileHomeBeat.addEventListener("load", mobileAnimate);
    fullHomeBeat.addEventListener("load", fullAnimate);

  //Animate mobile sized heartline in TOPS Stats Section
    function mobileTops(parent) {

        var duration = 5,
        lineWidth = 767, 
        innerSVG = parent.contentDocument; 
        start3 = new TimelineMax;
        var rect3 = innerSVG.querySelector("#svgRect3");
        console.log(rect3);
        start3.to(rect3, duration, {width: lineWidth, ease: Power0.easeNone});
      }

  //Animate full sized heartline in TOPS Stats Section
      function fullTops(parent) {
        innerSVG = parent.contentDocument; 
        var duration = 5,
        lineWidth2 = 2040, 
        start4 = new TimelineMax;
        var rect4 = innerSVG.querySelector("#svgRect4");
        console.log(rect4);
        start4.to(rect4, duration, {width: lineWidth2, ease: Power0.easeNone});
      }

    var waypoint1 = new Waypoint({
        element: document.querySelector("#topsWhole").querySelector('#beat3'),
        handler: function(direction) {
          console.log("scrolled to mobile sized tops heartline!");
          let mobileBeat = document.querySelector('#beat3');
          let compStyles = window.getComputedStyle(mobileBeat);
          // If mobile image displayed, animate it
          if (compStyles.getPropertyValue('display') === 'block') {

            mobileTops(this.element);
        }

        },
        offset:'200'
      })


        var waypoint2 = new Waypoint({
        element: document.querySelector("#topsWhole").querySelector('#beat4'),
        handler: function(direction) {
          console.log("scrolled to full sized tops heartline!");
          let fullBeat = document.querySelector('#beat4');
          let compStyles = window.getComputedStyle(fullBeat);
          // If full-sized  image displayed, animate it
          if (compStyles.getPropertyValue('display') === 'block') {
      
            fullTops(this.element);
        }
  
        },
        offset:'200'
      })
    

})();

