var username = document.getElementById('username')
var useremail = document.getElementById('useremail')
var userpassword = document.getElementById('userpassword')
var search = document.getElementById('search');
var addBtn = document.getElementById('addBtn')
var updateBtn = document.getElementById('updateBtn')

var userContainer = [] ; 
localStorage.getItem('myuesrs') 
userContainer = JSON.parse(localStorage.getItem('myuesrs'))

function  adduesr()
{
    comparison()
    if (validEmail()==true && validName()==true && validPassword()==true && comparison()==false)
    {
        swal
        ({
            title: "Your account has been created",
            icon:"success",
            timer:"2000"
        });
        var userr =
        {
            name: username.value,
            email: useremail.value,
            passowrd: userpassword.value,
        }
        userContainer.push(userr)
        localStorage.setItem('myuesrs',JSON.stringify(userContainer) )
        cf()
        setTimeout(timee, 2000 )
    }
}


function timee()
{
    var url='login.html'
    window.location.href = url
}

function comparison()
{
    for (var index = 0; index < userContainer.length; index++)
    {
        if (userContainer[index].email == useremail.value)
        {
            var element = [index];
        }

    }
    if (element)
    {
       
        return true;
    }
    else
    {
        return false;
    }
}


function validName()
{
    var regex =/[a-z]{2,}/ ;
    return  regex.test(username.value)
}
function validEmail()
{
    var regex =/^\w+([\.-]?\w+)*@[a-z]{3,9}\.com$/ ;
    return  regex.test(useremail.value)
}
function validPassword()
{
    var regex =/\w{3,}/ ;
    return  regex.test(userpassword.value)
}
function cf()
{
    username.value=''
    useremail.value=''
    userpassword.value=''
}



























