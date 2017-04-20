(function () {
var Naam;
document.getElementById('ButSub').onclick=function()
{
    var Naam = document.getElementById('Naming');
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", Naam);
        // Retrieve

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

document.getElementById("result").innerHTML = localStorage.getItem("lastname");
})();