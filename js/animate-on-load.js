
  (() => {

    function setVisible (element) {

        console.log("setVisible");

        element.classList.remove("none");
        element.classList.add("animated");
        element.classList.add("fadeIn");
    }



  
    var waypoint = new Waypoint({
      element: document.querySelector("#opsSect"),
      handler: function(direction) {
          console.log("scrolled to element!", this.element);

              setVisible(this.element);
        
      },


  });

  var waypoint2 = new Waypoint({
    element: document.querySelector("#topsFullSect"),
    handler: function(direction) {
        console.log("scrolled to element!", this.element);

            setVisible(this.element);
      
    },
  });

  })();
