function checkValidation()
{
    var isAdmin = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if ( isAdmin == "admin" && password == "123")
    {
        alert ("Redirecting to Admin Page");
        window.location = "mainpage.html";
        return false;
    }
    else
    {
        alert('Wrong Password!');
        return false;
    }
}
