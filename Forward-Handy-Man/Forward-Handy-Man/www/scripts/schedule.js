(function () {

document.getElementById('ButSub').onclick=function()
{
    alert('Submitted');
    var Naam = document.getElementById('Naming');
    if (typeof (Storage) !== "undefined") {
        // Store
        window.localStorage.setItem('Naming', Naam.value);
        // Retrieve
        
        
    }
    else
    {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    document.getElementById("result").innerHTML = window.localStorage.getItem('Naming');
}


})();