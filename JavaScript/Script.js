// Read more / Read less button
function Read(event) { //The browsers gives this event
  const btn = event.target; //One of events property (Target button)
  const healthPs = document.getElementsByClassName("health-paragraph"); //Html Collection = Group of Html Elements (Same class "health-paragraph")
  const elements = Array.from(healthPs); //Convert html collection into array of html elements
  //Return classlist(Boolean function)
  const activeP = elements.find((el) => { //Array of strings (Boolean function)
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

// Return Top Button
var topBtn = document.getElementById("returnTop");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0;
}


// Online Chat button
function undermaintenance1() {
  alert("Online chat is Under maintenance right now, Please try again later.");
}
// Requet a call button
function undermaintenance2() {
  alert("Call requests are not available right now, Please try again later.");
}
// Call Karim button
function call() {
  alert("Call this number 0123456789")
}


// Blur and popup functions
var blurBg = document.getElementById("blur");
var emailPopup = document.getElementById("EmailPopup");
var emailBtn = document.getElementById("EmailMeBtn");
var closeBtn = document.getElementsByClassName("CloseBtn")[0];

emailBtn.onclick = function() {
  emailPopup.style.display = "block";
  blurBg.style.filter = "blur(2px)";
}
closeBtn.onclick = function() {
  emailPopup.style.display = "none";
  blurBg.style.filter = "none";
}

window.onclick = function(event) {
  if (event.target == emailPopup) {
    emailPopup.style.display = "none";
    blurBg.style.filter = "none";
  }
};

function downloadApplication() {
  var id = prompt("Enter Id");
  var password = prompt("Enter Passowrd");

  // Selector is required by database to search and any key inside is a search by equal
  const body = {
    "selector": {
      "_id": id,
      "password": password
    }
  };

  searchDocument(body, (response) => {
    // No Error
    if (!response.error) {
      if (response.docs.length == 1) {
        // JSON found
        // convert json to string which is the first json found from search and since we search by a unique value the docs will always carry one or no JSON
        const fileAsText = JSON.stringify(response.docs[0]);

        // convert text to Url(data bytes) to Download
        const url = URL.createObjectURL(new Blob([fileAsText]));
        // To Download the Url we need a hyperlink or Anchor Element
        const hyperLink = document.createElement('A');
        // Add url to the Anchor
        hyperLink.href = url;
        // Define the Anchor as Download Link
        // Since the Download Attribute is the filename we set it to the following text "QuoteApplication_id"
        hyperLink.setAttribute("download", "QuoteApplication_" + id);
        document.body.appendChild(hyperLink);
        hyperLink.click();
        document.body.removeChild(hyperLink);
      } else {
        alert("Not Found");
      }
    } else {
      // Error
      alert("Failed");
    }
  });

}
