
(() => {


    function move1() {
        console.log("move1 function!");

        var duration = 2,
            duration2 = 3,
            lineWidth = 767,
            lineWidth2 = 2000, 
            start = new TimelineMax({paused: true});
            start2 = new TimelineMax({paused: true});

        var rect1 = document.querySelector("#svgRect"),
            rect2 = document.querySelector("#svgRect2"),
            mobileVers = document.querySelector("#beat1"),
            fullVers = document.querySelector("#beat2");

            console.log(mobileVers.display);
            console.log(fullVers);


                start.to(rect1, duration, {width: lineWidth, ease: Power0.easeNone}, 2);
                start.restart();


                start2.to(rect2, duration2, {width: lineWidth2, ease: Power0.easeNone}, 2);
                start2.restart();
               

    }

    var waypoint = new Waypoint({
        element: document.querySelector('#beat3'),
        handler: function(direction) {
          console.log("Basic waypoint triggered");
          console.log("move2 function!");

          var duration = 5,
              lineWidth = 767, 
              lineWidth2 = 2000, 
              start3 = new TimelineMax;
              var rect3 = document.querySelector("#svgRect3");



                start3.to(rect3, duration, {width: lineWidth, ease: Power0.easeNone});

        },
        offset:'200'
      })

        var waypoint2 = new Waypoint({
        element: document.querySelector('#beat4'),
        handler: function(direction) {
          console.log("Basic waypoint triggered");
          console.log("move2 function!");

          var duration = 5,
              lineWidth = 100, 
              lineWidth2 = 2040, 
              start4 = new TimelineMax;
              var rect4 = document.querySelector("#svgRect4");


                start4.to(rect4, duration, {width: lineWidth2, ease: Power0.easeNone});


  
        },
        offset:'200'
      })

    move1();
    


})();

