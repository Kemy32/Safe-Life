function Read(event) {        //The browsers gives this event
  const btn = event.target;   //One of events property (Target button)
  const healthPs = document.getElementsByClassName("health-paragraph"); //Html Collection = Group of Html Elements (Same class "health-paragraph")
  const elements = Array.from(healthPs); //Convert html collection into array of html elements
                          //Return classlist(Boolean function)
  const activeP = elements.find((el) => {                             //Array of strings (Boolean function)
    return el.parentElement.parentElement.parentElement.parentElement.classList.contains("active"); // To know which tab is (active or show)
  });

  if (activeP.classList.contains("show-read")) {
    activeP.classList.remove("show-read");
    btn.innerHTML = 'Read More';
  } else {
    activeP.classList.add("show-read");
    btn.innerHTML = 'Read Less';
  }

}
