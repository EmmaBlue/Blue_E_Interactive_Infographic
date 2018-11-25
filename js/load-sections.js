
  (() => {

    function animate (element) {

        console.log("animate");

        //Display element and animate it
        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
    }


    function animate2 (element) {

        console.log("animate 2 seconds");

         //Display element and animate it
        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
        element.classList.add("delay-2s");
    }

    function animate4 (element) {

        console.log("animate 4 seconds");

         //Display element and animate it
        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
        element.classList.add("delay-4s");
    }

    function animate5 (element) {

        console.log("animate 5 seconds");

         //Display element and animate it
        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
        element.classList.add("delay-5s");
    }


  
    var waypoint = new Waypoint({
      element: document.querySelector("#opsSect"),
      handler: function(direction) {
          console.log("scrolled to element!", this.element);
          var not = document.querySelector("#opsSect").querySelector('#not');
          //Animate in section 
          animate(this.element);
          //Stagger animation of paragraph within section
          animate2(not);
        
      },
      offset: 200

  });

    var waypoint2 = new Waypoint({
    element: document.querySelector("#topsFullSect"),
    handler: function(direction) {
        console.log("scrolled to element!", this.element);
        var visits = document.querySelector("#topsFullSect").querySelector('#visits');
        var hearts = document.querySelector("#topsFullSect").querySelector('#hearts');
        var heartsFull = document.querySelector("#topsFullSect").querySelector('#heartsFull');
        var reversed = document.querySelector("#topsFullSect").querySelector('#reversed');

        //Animate in section
        animate(this.element);
        //Stagger animation of paragraph within section
        animate2(visits);
        //Stagger animation of image within section
        let compStyles = window.getComputedStyle(hearts);
        // If mobile image displayed, animate it
        if (compStyles.getPropertyValue('display') === 'block') {

          animate4(hearts);
      }
        // Else animate full version of image
        else {

            animate4(heartsFull);
        }
        
        //Stagger animation of paragraph within section
        animate4(reversed);
      
    },
    offset: 200
  });

  var waypoint3 = new Waypoint({
    element: document.querySelector("#clientSect"),
    handler: function(direction) {
        console.log("scrolled to element!", this.element);
        var clientAccess = document.querySelector("#clientSect").querySelector('#clientAccess');
        //Animate in section
        animate(this.element);
        //Stagger animation of paragraph within section
        animate(clientAccess);
      
    },
    offset: 200
  });

  var waypoint4 = new Waypoint({
    element: document.querySelector("#communitySect"),
    handler: function(direction) {
        console.log("scrolled to element!", this.element);
        var bizSect = document.querySelector("#communitySect").querySelector('#bizSect');
        var arrow = document.querySelector("#clientSect").querySelector('#arrowLast');

         //Animate in section
        animate(this.element);
        //Stagger animation of image within section
        animate2(arrow);
        //Stagger animation of section within section
        animate2(bizSect);
      
    },
    offset: 200
  });


  })();
