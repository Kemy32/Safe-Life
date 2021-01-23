const dbUrl = "http://admin:123@localhost:5984/quote_form"; // username:password
const xhttp = new XMLHttpRequest(); // Build in JS
xhttp.withCredentials = true; // Use the username and password authentication

// Global Function to Access Database
function dbRequest(requestType, onResult, id, body) {
    var method, isFind, async = true;
    // Set method type according to the requestType
    if (requestType === "GET") {
        method = "GET";
    } else if (requestType === "SEARCH") {
        method = "POST";
        isFind = true;
    } else if (requestType === "CREATE") {
      method = "POST";
      async = false;
    }
// method = Request Type { POST, GET }
// onResult = Function that takes one parameter
// id = string added to the dbUrl to get Document (JSON)
// Request Body = (Exist only on POST Request) Data sent with Request taken as JSON and converted to text when send to the Database

    // onreadystatechange is an event, triggered when the Request status is changed
    xhttp.onreadystatechange = () => {
      // readyState 4 = completed
      if (xhttp.readyState == 4) {
        const data = JSON.parse(xhttp.responseText); // response as text and converted to JSON such as { name: "Karim" }
        onResult(data);
      }
    };

    // dbUrl + (if isFind true add "_find" to the url)
    // id exist only at GET Request
    const url = dbUrl + "/" + (isFind ? "_find" : "") + (id ? id : "");

    // Open connection with Url, true for Async
    xhttp.open(method, url, async);
    // Specify sent data type (json)
    xhttp.setRequestHeader("Content-Type", "application/json");
    // body exist ? convert to string else ignore
    xhttp.send(body ? JSON.stringify(body) : body);
}

function createDocument(body, onResult) {
    dbRequest("CREATE", onResult, null, body);
}

function getDocument(id, onResult) {
  dbRequest("GET", onResult, id);
}

function searchDocument(body, onResult) {
    dbRequest("SEARCH", onResult, null, body);
}
