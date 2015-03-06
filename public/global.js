
function createObject(name, age, github) {
  var js_req = new XMLHttpRequest
  js_req.open("get", "http://localhost:4567/students/create/" + name + "/" + age + "/" + github);
  js_req.send()
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
