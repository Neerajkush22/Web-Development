function btn1() {
    document.getElementById("container1").style.backgroundColor = "red";
    document.getElementById("container1").style.color = "black";
}
function btn2() {
    console.log("a");
    document.getElementsByClassName("container2")[0].style.backgroundColor = "purple";
    document.getElementsByClassName("container2")[0].style.color = "white";
}
function btn3() {
    document.getElementsByName("container3")[0].style.backgroundColor = "green";
    document.getElementsByName("container3")[0].style.color = "white";
}
function btn4() {
    document.getElementsByTagName("div")[4].style.backgroundColor = "beige";
    document.getElementsByTagName("div")[4].style.color = "blue";
}
function btn5() {
    document.querySelector(".container5").style.backgroundColor = "pink";
    document.querySelector(".container5").style.color = "red";
}
function btn6() {
    document.querySelectorAll(".container")[5].style.backgroundColor = "purple";
    document.querySelectorAll(".container")[5].style.color = "black";
}

function setTime()
{
    document.getElementById("h1").style.backgroundColor = "black";
    document.getElementById("h1").style.color = "blue";
    document.getElementById("h1").style.border = "5px solid gray";
    document.getElementById("h1").innerText = "Hey! there I am a text after setTimeout, Have a great day(^.^)";
    alert("The color and the text is changed...")
}

var time = setTimeout(setTime,5000);

function setInt()
{
    var change = document.getElementById("h2");
    change.style.backgroundColor = change.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue"; 
    change.style.color = "blue";
    change.style.border = "5px solid gray";
    change.innerText = "Hey! there I am a text after setInterval, Have a great day(^.^)";
    // alert("The color and the text is changed...")
}

var interval = setInterval(setInt,1000);

function stop()
{
    clearInterval(interval);
}

document.getElementById("mybtn").addEventListener("click", disDate);

function disDate()
{
    document.getElementById("show").innerHTML = Date();
}

var get = document.getElementById("mybtn1");
get.addEventListener("mouseover", mouseover);
get.addEventListener("click", click);
get.addEventListener("mouseout", mouseout);

function mouseover() {
  document.getElementById("show1").innerHTML += "Moused over!<br>";
}

function click() {
  document.getElementById("show1").innerHTML += "Clicked!<br>";
}

function mouseout() {
  document.getElementById("show1").innerHTML += "Moused out!<br>";
}

document.getElementById("mybutton").addEventListener("click", insertEle);

function insertEle()
{
    document.getElementById("inserting").innerHTML += "<h3>Hii I am new added Element!</h3>";
}

function tab() {
    var table = document.getElementById("table1");
    var row = table.insertRow(0);
    var col = row.insertCell(0);
    col.innerHTML = "New Cell";
    var col1 = row.insertCell(1);
    col1.innerHTML = "New Cell1";
}

function identify() {
    var rowno = prompt("Enter the row number: ", "0");
    var colno = prompt("Enter column number: ", "0");
    var content = prompt("Enter the content you want to add");
    var table1 = document.getElementById("table2").rows[Number(rowno)].cells;
    table1[Number(colno)].innerHTML = content;
}

function addCell() {
    var table = document.getElementById("table2");
    var row = table.insertRow(0);
    var col = row.insertCell(0);
    var col = row.insertCell(0);
    var col = row.insertCell(0);
    var col = row.insertCell(0);
}

function addUser() {
    var rowno1 = window.prompt("Enter rows to be added: ", 1);
    var colno1 = prompt("Enter columns to be added:", 1);
    for (var i = 0; i < Number(rowno1); i++) {
        var row1 = document.getElementById("table3").insertRow(i);
        for (var j = 0; j < Number(colno1); j++) {
            var col1 = row1.insertCell(j);
            col1.innerHTML = "Row: " + i + " column: " + j;
            var rowno = prompt("Enter the row number: ", "0");
            var colno = prompt("Enter column number: ", "0");
            var content = prompt("Enter the content you want to add");
            var table1 = document.getElementById("table3").rows[Number(rowno)].cells;
            table1[Number(colno)].innerHTML = content;
        }
    }
}

