
(() => {


    function move1() {
        console.log("move1 function!");

        var duration = 2,
            duration2 = 3,
            lineWidth = 767,
            lineWidth2 = 2000, 
            rect1 = document.querySelector("#svgRect"),
            rect2 = document.querySelector("#svgRect2");
            start = new TimelineMax({paused: true});
            start2 = new TimelineMax({paused: true});


                start.to(rect1, duration, {width: lineWidth, ease: Power0.easeNone}, 2);
                start.restart();


                start2.to(rect2, duration2, {width: lineWidth2, ease: Power0.easeNone}, 2);
                start2.restart();
               

    }

    function mobileBorder(parent) {

        var duration = 5,
        lineWidth = 767, 
        innerSVG = parent.contentDocument; 
        start3 = new TimelineMax;
        var rect3 = innerSVG.querySelector("#svgRect3");
        console.log(rect3);
        start3.to(rect3, duration, {width: lineWidth, ease: Power0.easeNone});
      }

      function fullBorder(parent) {
        innerSVG = parent.contentDocument; 
        var duration = 5,
        lineWidth2 = 2040, 
        start4 = new TimelineMax;
        var rect4 = innerSVG.querySelector("#svgRect4");
        console.log(rect4);


          start4.to(rect4, duration, {width: lineWidth2, ease: Power0.easeNone});
      }

      var waypoint = new Waypoint({
        element: document.querySelector("#firstSect").querySelector('#beat1'),
        handler: function(direction) {
          console.log("Basic waypoint triggered");
          console.log("move3 function!");
        
          if (this.element.offsetHeight > 0 ) {

            moveMobile(this.element);
        }

        },
        offset:'200'
      })

    var waypoint2 = new Waypoint({
        element: document.querySelector("#topsWhole").querySelector('#beat3'),
        handler: function(direction) {
          console.log("Basic waypoint triggered");
          console.log("move3 function!");
        
          if (this.element.offsetHeight > 0 ) {

            mobileBorder(this.element);
        }

        },
        offset:'200'
      })


        var waypoint3 = new Waypoint({
        element: document.querySelector("#topsWhole").querySelector('#beat4'),
        handler: function(direction) {
          console.log("move4 function!");
          if (this.element.offsetHeight > 0 ) {

            fullBorder(this.element);
        }
    

  
        },
        offset:'200'
      })

    move1();
    


})();

