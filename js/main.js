(() => {

    //grab the boxes
    const opBoxes = document.querySelectorAll('.box');


    function fetchData() {
        //this.id gives you id of box that you've clicked on 
        fetch(`./includes/connect.php?nameID=${this.id}`)
        //convert it into object
        .then (res => res.json())
        //pass it to start of the dataset
        .then (data => {
            
            console.log(this);
            console.log(data);
            parseImgData(data[0]);
            this.removeEventListener("click", fetchData);
        })
        //show error message in case of error
        .catch(function(error) {

            console.error(error);
        });
        
    }

    function parseImgData(nameID) {
        //destructure the database info and grab just what we need 
        const {name, img_path} = nameID,
        section = document.querySelector("#roomSect");
        //take the database data and put it on the page 
            let svg = document.createElement("IMG");
            svg.classList.add("roomSVG");
            svg.classList.add("animated");
            svg.classList.add("fadeIn");
            svg.src = img_path;
            svg.id = name + "-pic";
            section.appendChild(svg);


    };
    opBoxes.forEach(box => box.addEventListener("click", fetchData))

})();