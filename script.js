var myNodeList = document.querySelectorAll("li")
var i;
for (let i = 0; i < myNodeList.length; i++) {
  var button = document.createElement("button")
  var buttonContent = document.createTextNode("Delete")
  button.className = "cancel"
  button.appendChild(buttonContent)
  myNodeList[i].appendChild(button)
}

var cancel = document.getElementsByClassName("cancel")
var i;
for (let i = 0; i < cancel.length; i++) {
  cancel[i].onclick = function(){
    var clearThis = this.parentElement
    clearThis.style.display = "none"
  }
}
function addContent(){
  var newList = document.createElement("li");
  var ins = document.getElementById("inPut").value;
  var inputContent = document.createTextNode(ins)
  var liContent = document.getElementById("toDo")
  newList.appendChild(inputContent)

  if (ins === " "){
    alert("Fill in an Input")
  } else {
    liContent.appendChild(newList)
  }
  document.getElementById("inPut").value = " "
  
  var button = document.createElement("button")
  var buttonContent = document.createTextNode("Delete")
  button.className = "cancel"
  button.appendChild(buttonContent)
  newList.appendChild(button)

for (let i = 0; i < cancel.length; i++) {
  cancel[i].onclick = function(){
    var clearThis = this.parentElement
    clearThis.style.display = "none"
  }
}
}


