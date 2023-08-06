var username = document.getElementById('username')
var useremail = document.getElementById('useremail')
var userpassword = document.getElementById('userpassword')
var home = document.getElementById('home')
var userhome = [] ; 
var userContainer = [] ; 
    userContainer = JSON.parse(localStorage.getItem('myuesrs'))
    userhome = JSON.parse(localStorage.getItem('homm'))
    
var listindex = userhome.length-1
var ldistelame = userhome[listindex]
    
    document.getElementById('home').innerHTML = 'Wellcome ' +ldistelame
function login()
{
    checkstayle()
    checkel()
    var hello = duuo
    if (checkemail()==true&&checkpassword()==true)
    {
        timee()
        userhome.push(hello)
        localStorage.setItem('homm',JSON.stringify(userhome) )
    }
}
function timee() 
{
    var url='home.html'
    window.location.href = url
}
function checkstayle() 
{
    if (checkemail()==true) 
    {
        console.log('email true');
        useremail.classList.add('border-success')
    }
    else
    {
        console.log('email no');
        useremail.classList.add('border-danger')
    }
    if (checkpassword()==true) 
    {
        console.log('pass true');
        userpassword.classList.add('border-success')
    }
    else{
        console.log('pass no');
        userpassword.classList.add('border-danger')
    }
}




function cf()
{
    useremail.value=''
    userpassword.value=''
}




function checkpassword()
{
    for (var index = 0; index < userContainer.length; index++)
    {
        if (userContainer[index].passowrd == userpassword.value)
        {
            var element = [index];
            break;
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

function checkemail()
{
    for (var index = 0; index < userContainer.length; index++)
    {
        if (userContainer[index].email == useremail.value)
        {
            var element = userContainer[index];     
            break
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
function checkel()
{
    for (var index = 0; index < userContainer.length; index++)
    {
        if (userContainer[index].email == useremail.value)
        {
            return duuo = userContainer[index].name;   
        }
    }
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






















