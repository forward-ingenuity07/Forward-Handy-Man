(function () {

document.getElementById('ButSub').onclick=function()
{
    alert('Submitted');
    var Naam = document.getElementById('Naming');
    if (typeof (Storage) !== "undefined") {
        // Store
        window.localStorage.setItem('lastname',Naam)
        // Retrieve
        
        document.getElementById("result").innerHTML = window.localStorage.getItem('lastname');
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


})();