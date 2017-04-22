(function () {

document.getElementById('ButSub').onclick=function()
{
    alert('Submitted');
    var Naam = document.getElementById('Naming');
    window.localStorage.setItem('Naming', Naam.value);
    /*if (typeof (Storage) !== "undefined") {
        // Store
        
        // Retrieve
        
        
    }*/
   /* else
    {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }*/
    
}
document.getElementById("first_elem").innerHTML = window.localStorage.getItem('Naming');

})();