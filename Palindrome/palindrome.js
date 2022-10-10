function Palindrome()
{
    var value = Number(document.getElementById("input").value);
    var rem,temp,final=0;
    temp = value;
    while(value>0)
    {
        rem = value%10;
        value = parseInt(value/10);
        final = final*10+rem;
    }
    if(final == temp)
    {
        alert(temp+ " The number is Palindrome");
    }
    else
    {
        alert(temp+ " The number is not Palindrome");
    }
}