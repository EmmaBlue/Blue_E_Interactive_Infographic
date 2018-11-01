
(() => {


    function move1() {
        console.log("move1 function!");

        var duration = 5,
            lineWidth = 100, 
            lineWidth2 = 2240, 
            start = new TimelineMax();
            start1 = new TimelineMax();

        var rect1 = document.querySelector("#svgRect"),
            rect2 = document.querySelector("#svgRect2");


        start.to(rect1, duration, {width: lineWidth, ease: Power0.easeNone});
        start1.to(rect2, duration, {width: lineWidth2, ease: Power0.easeNone});

    }

    var waypoint = new Waypoint({
        element: document.querySelector('#beat3'),
        handler: function() {
          console.log("Basic waypoint triggered");
          console.log("move2 function!");

          var duration = 5,
              lineWidth = 100, 
              lineWidth2 = 2040, 
              start2 = new TimelineMax();
              start3 = new TimelineMax();
              var rect3 = document.querySelector("#svgRect3");
              var rect4 = document.querySelector("#svgRect4");
  
          start2.to(rect3, duration, {width: lineWidth, ease: Power0.easeNone});
          start3.to(rect4, duration, {width: lineWidth2, ease: Power0.easeNone});
        },
        offset:'30%'
      })

        var waypoint = new Waypoint({
        element: document.querySelector('#beat3'),
        handler: function() {
          console.log("Basic waypoint triggered");
          console.log("move2 function!");

          var duration = 5,
              lineWidth = 100, 
              lineWidth2 = 2040, 
              start2 = new TimelineMax();
              start3 = new TimelineMax();
              var rect3 = document.querySelector("#svgRect3");
              var rect4 = document.querySelector("#svgRect4");
  
          start2.to(rect3, duration, {width: lineWidth, ease: Power0.easeNone});
          start3.to(rect4, duration, {width: lineWidth2, ease: Power0.easeNone});
        },
        offset:'30%'
      })

    move1();
    //move2();
    


})();

