function Change() {
    document.getElementById("change").innerHTML = "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe";
    var chng = document.getElementById("header")
    chng.style.backgroundImage = "url('https://images.unsplash.com/photo-1661127402205-a60877354473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
}

function Background()
{
    let bckgrnd = document.getElementById("id1");
    bckgrnd.style.color = 'black';
    bckgrnd.style.backgroundColor = 'blue';
}
function imgChange()
{
    var imgchng = document.getElementById("img");
    imgchng.src = 'https://images.unsplash.com/photo-1661127402205-a60877354473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
}

function display()
{
    var video = document.getElementById("video");
    video.style.visibility = 'visible';
}

var x = document.getElementById("video"); 

function video() { 
  x.play(); 
} 

function video1() { 
  x.pause(); 
} 