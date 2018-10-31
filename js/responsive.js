
  (() => {
    console.log("Welcome to These Sites Save Lives.");
  
    //! VARIABLES


    //! FUNCTIONS
  
  
    //! EVENTS
    window.addEventListener('load', () => {
  
      // create source video element according to screen size
      if (window.matchMedia("(max-width: 767px)").matches) {
        document.querySelector('#people').data = "./images/people.svg";
        document.querySelector('#hearts').data = "./images/hearts.svg";
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        document.querySelector('#people').data = "./images/people-big.svg";
        document.querySelector('#hearts').data = "./images/hearts-big.svg";
      }
  
    });
  
  
  })();