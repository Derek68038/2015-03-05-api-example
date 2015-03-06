
function createObject(id) {
  var js_req = new XMLHttpRequest
  js_req.open("get", "http://localhost:4567/students/" + id)
  js_req.send()
  JSON.parse(js_req.response)
}

function saveObject(id) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id + "/save");
  js_req.send();
  
  // Request was sent.
  // Sinatra matched route.
  // Route was run.
  // Ruby ran.
  // DB updated.
  // Student hash was defined.
  // Student hash to_json
  // json of student is returned
  // that return is sent back to the js_req object
  // js_req object stores the return in its "response" property.
  
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Information updated for " + r.name + "! Age is now " + r.age + ".");
  }, false);
}

function ultraWise(id) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id + "/wise");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    if (r["wise"] === true) {
      alert("Yay, they're wise!");
    } else {
      alert("Sorry, you're not wise!");   
    };
  }, false);
} 

function canDrink(id) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id + "/drink");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    if (r["drink"] === true) {
      alert("You're old enough to drink!");
    } else {
      alert("Sorry, you have a few more years before you can drink.");   
    };
  }, false);
} 

