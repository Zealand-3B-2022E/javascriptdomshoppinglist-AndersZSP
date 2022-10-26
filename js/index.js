//Write your Javascript code here
console.log("MY Shoppinglist")

//Find based on ID
//let find1 = document.getElementById("1")
//console.log(find1)

//Find based on Class
//let findClass = document.getElementsByClassName("healthy")
//console.log(findClass)

//Find based on TagName
//let findTag = document.getElementsByTagName("li")
//console.log(findTag)

//Change class attribute
//let change2 = document.getElementById("2")
//change2.setAttribute("class","healthy")

//let hidden3 = document.getElementById("3")
//hidden3.setAttribute("hidden","true")

//DOESNT WORK UWU Change multiple classes
//let changeMultiple = document.querySelector(".healthy",".unhealthy")
//console.log(changeMultiple)
//changeMultiple.setAttribute("class","unhealthy")

/*Prints the parent element  ul*/
let findParent = document.getElementById("1").parentNode.nodeName;
console.log(findParent);
let findChild = document.getElementById("list").lastElementChild;
console.log(findChild)
let firstOfKin = document.getElementById("list").firstElementChild;
console.log(firstOfKin)
/*Adding new item to list*/
const node = document.createElement("li");
const textElement = document.createTextNode("Dild");
node.setAttribute("class","healthy")
node.setAttribute("id","4")
node.appendChild(textElement);
document.getElementById("list").appendChild(node)

//Move node higher on list
let findDild = document.getElementById("4")
let listOfFood = document.getElementById("list")
listOfFood.insertBefore(findDild, listOfFood.children[1])

//Move to other list
let allUnhealthy = document.getElementsByClassName("unhealthy")


/*const newNode = document.getElementById("list")
document.getElementById("listUnhealthy").appendChild(newNode)*/





//EvenLISTENERS
//Add item to list
/*
document.getElementById("addButton").addEventListener('click', addGoods)

let elementInput = document.getElementById('itemName')

function addGoods(e){
    console.log("Test at AddButton fungere og udfører addGoods");
    let inputText = (elementInput).value;
    console.log("The inputText is:" + inputText);

    let listUnhealthy = document.getElementById("listUnhealthy")
    let newLi = document.createElement('li');
    let newText = document.createTextNode(inputText);
    newLi.appendChild(newText);
    newLi.setAttribute('class','unhealthy');

    listUnhealthy.appendChild(newLi);
}
*/
//Add item to list
document.getElementById("addButton").addEventListener('click', addGoods)

let elementInput = document.getElementById('itemName')

function addGoods(e){
    console.log("Test at AddButton fungere og udfører addGoods");
    let inputText = (elementInput).value;
    console.log("The inputText is:" + inputText);

    let listUnhealthy = document.getElementById("listUnhealthy")
    let newLi = document.createElement('li');
    let newText = document.createTextNode(inputText);
    newLi.appendChild(newText);
    newLi.setAttribute('class','unhealthy');


    var liList = document.getElementById("listUnhealthy").getElementsByTagName("li");

    var largo = liList.length
    console.log(largo)
    let textID = largo.toString();
    newLi.setAttribute('id',textID)
    listUnhealthy.appendChild(newLi);
}

//Make a function that finds the last ID in the shopping list and then give the new item that ID

