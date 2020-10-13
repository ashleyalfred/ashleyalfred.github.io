function myform()
{
    let name = document.querySelector('#name').value;
    if (name === '')
    {
        alert('Please Enter Name');
    }
    else
    {
        alert('Hello, ' + name + '!');
    }

}