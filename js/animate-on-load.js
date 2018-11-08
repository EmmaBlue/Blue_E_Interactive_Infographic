
  (() => {

    var test = document.querySelector("#topsFullSect").querySelector('#visits');
    console.log(test);


    function animate (element) {

        console.log("animate 1");

        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
    }


    function animate2 (element) {

        console.log("animate 2");

        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
        element.classList.add("delay-2s");
    }

    function animate3 (element) {

        console.log("animate 3");

        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
        element.classList.add("delay-3s");
    }


    function animate5 (element) {

        console.log("animate 5");

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
            animate(this.element);
    
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
        var reversed = document.querySelector("#topsFullSect").querySelector('#reversed');

            animate(this.element);
            animate2(visits);
            animate5(hearts);
            animate5(reversed);
      
    },
    offset: 200
  });

  var waypoint3 = new Waypoint({
    element: document.querySelector("#clientSect"),
    handler: function(direction) {
        console.log("scrolled to element!", this.element);
        var clientAccess = document.querySelector("#clientSect").querySelector('#clientAccess');
        var arrow = document.querySelector("#clientSect").querySelector('#arrowLast');

        animate(this.element);
        animate2(clientAccess);
        animate2(arrow);
      
    },
    offset: 200
  });

  var waypoint3 = new Waypoint({
    element: document.querySelector("#communitySect"),
    handler: function(direction) {
        console.log("scrolled to element!", this.element);
        var commSect = document.querySelector("#communitySect").querySelector('#commSect');

        animate(this.element);
        animate2(commSect);
      
    },
    offset: 300
  });


  })();
