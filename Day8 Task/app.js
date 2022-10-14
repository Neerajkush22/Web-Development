function Time()
{
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var period ="";

    if(hour >=12)
    {
        period = "PM";
    }
    else{
        period = "AM";
    }
    if(hour == 0)
    {
        hour = 12;
    }
    else
    {
        if(hour >12)
        {
            hour = hour - 12;
        }
    }
    hour = update(hour);
    minutes = update(minutes);
    seconds = update(seconds);

    document.getElementById("digital_Clock").innerHTML = hour + " : " + minutes + " : " + seconds + "  " + period;
    setInterval(Time,1000);
}

function update(time)
{
    if(time<10)
    {
        return "0" + time;
    }
    else
    {
        return time;
    }
}

Time();

function change()
{
    document.getElementById("digital_Clock").style.fontFamily = "Silkscreen, cursive";
    document.getElementById("digital_Clock").style.color = "green";
}

function change1()
{
    document.getElementById("digital_Clock").style.fontFamily = "Comforter Brush, cursive";
    document.getElementById("digital_Clock").style.color = "purple";
}

function change2()
{
    document.getElementById("digital_Clock").style.fontFamily = "Inspiration, cursive";
    document.getElementById("digital_Clock").style.color = "beige";
}