
  (() => {

    function setVisible (element) {

        console.log("setVisible");

        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
    }



  
    var waypoint = new Waypoint({
      element: document.querySelector("main").querySelector("#opsSect"),
      function(direction) {
          console.log("scrolled to element!", this.element);

              setVisible(this.element);
        
      },


  });

  var waypoint2 = new Waypoint({
    element: document.querySelector("#topsFullSect").querySelector("#topsSect"),
    function(direction) {
        console.log("scrolled to element!", this.element);

            setVisible(this.element);
      
    },
  });

  window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });

  })();
