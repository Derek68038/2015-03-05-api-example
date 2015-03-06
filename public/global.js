window.onload = function() {
  findForm = document.getElementById("findStudent");
  findForm.addEventListener("submit", findObject);
  findForm.onsubmit = function() {return false};
  listLink = document.getElementById("listAll");
  listLink.addEventListener("click", listAll);
  listLink.onclick = function() {return false};
}

function listAll() {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    r.forEach(function(x) {
    console.log("Here is the student info - Id: " + x.id + ", Name: " + x.name + ", Age: " + x.age + ", Github: " + x.github + ".");
  });
  }, false);
}
  
function findObject() {
var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/students/find");
  js_req.send(new FormData(findForm));
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Here is the student info - Id: " + r.id + ", Name: " + r.name + ", Age: " + r.age + ", Github: " + r.github + ".");
  }, false);
}

function createObject(name, age, github) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/create/" + name + "/" + age + "/" + github);
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Record created for student # " + r.id + "! Name: " + r.name + ", Age: " + r.age + ", Github: " + r.github + ".");
  }, false);
}

function saveObject(id, name, age, github) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id + "/save/" + name + "/" + age + "/" + github);
  js_req.send();
  
  // Request was sent --- js_req.send().
  // Sinatra matched route.
  // Route was run  -- requests path was matched to a route handler.
  // Ruby ran in route handler.
  // DB updated.
  // Student hash was defined.
  // Student hash to_json
  // json of student is returned
  // that return is sent back to the js_req object
  // js_req object stores the return in its "response" property.
  
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Information updated for student # " + r.id + "! Name: " + r.name + ", Age: " + r.age + ", Github: " + github + ".");
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

function deleteStudent(id) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id + "/delete");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Student " + r.name + " has been deleted.");
  }, false);
}
