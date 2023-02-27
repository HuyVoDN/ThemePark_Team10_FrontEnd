function checkPassword()
{
    if(document.getElementById('password').value == '123')
    {
        alert('Redirecting to Main Page')
            window.location.href = "https://www.youtube.com/watch?v=Jrg9KxGNeJY";
    }
    else
    {
        alert('Wrong Password!');
        return false;
    }
}