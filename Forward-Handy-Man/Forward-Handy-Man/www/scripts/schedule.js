

var Naam;
document.getElementById('ButSub').onclick=function()
{
    Naam = document.getElementById('Naming');

}
if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", Naam);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}