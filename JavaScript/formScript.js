var chars = "ABCD123456789";
var id;
var password = "";

// Create Password
for (var i = 0; i < 5; i++) {
  const index = 0 + Math.floor(Math.random() * (chars.length - 1));
  password += chars[index];
}

function checkId() {
   id = 1 + Math.floor(Math.random() * 100);
  getDocument(id, (d) => {
      if(d.error) {
        document.getElementById("UserId").innerHTML = id;
        document.getElementById("UserPassword").innerHTML = password;
        document.getElementById("Form").classList.remove("form-loading");
      } else {
        checkId();
      }
  });
}

checkId();

function createForm() {
  // FormData Build in JS, help to get Form Data
  const data = new FormData(document.querySelector('form'));
  // Used to convert Form Data from Array [ "name": value ] to JSON
  const json = {};

  // return array of arrays [ ["title", "Mr"], ["first-name", "Karim"], [...] ]
  for (var [key, value] of data.entries()) {
    json[key] = value;
  }
  // as a Result of the For Loop json = { "first-name": "Karim", .... }

  // Add to the JSON the id and the Password
  json._id = id.toString();
  json.password = password;

  createDocument(json, function(response) {
    // if Error from Database
    if (response.error) {
        alert("Failed");
        window.location.href = "index2.html";
    } else {
    // no Error
        alert("Success");
    }
  });

}
