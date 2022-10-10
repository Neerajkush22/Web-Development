function Alert(){
    alert("I am an alert box.");
}

function Confirm()
{
    if(confirm("Press a button!"))
    {
        alert("You pressed OK!");
    }
    else
    {
        alert("You Pressed Cancel!");
    }
}

function Prompt()
{
    let person = prompt("Please Enter Your Name","Neeraj Kushwaha");
    if(person==null || person=="")
    {
        alert("User cancelled the prompt");
    }
    else{
        alert("Hello "+ person +" How are you today?");
    }
}