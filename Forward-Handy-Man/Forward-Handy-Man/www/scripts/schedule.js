(function () {
    document.getElementById('ButSub').onclick= function(){
        if (typeof (Storage) !== "undefined") {
            if (localStorage.clickcount) {
                alert('Submitted');
                localStorage.clickcount = document.getElementById('Naming');
            } else {
                localStorage.clickcount = '1';
            }
            document.getElementById("result").innerHTML = localStorage.clickcount;
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }

})();