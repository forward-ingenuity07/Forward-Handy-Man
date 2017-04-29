
(function () {
    var chosen_day;
    var chosen_time;
    var chosen_title;
    

document.getElementById('ButSub').onclick=function()
{
    var Naam;
    var Arr = [];
    //Naam = document.getElementById('Naming');
    //window.localStorage.setItem('Naming', Naam.value);
    Arr[0] = document.getElementById('Naming');
    window.localStorage.setItem('Naming', JSON.stringify(Arr));
    alert('Submitted');
    //var Naam = document.getElementById('Naming');
    //window.localStorage.setItem('Naming', Naam.value);
    /*if (typeof (Storage) !== "undefined") {
        // Store
        
        // Retrieve
        
        
    }*/
   /* else
    {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }*/
    
}

    document.getElementById('back').onclick=function()
{
        window.close();
        
        location.href = 'index.html';
       
    }
    var StoredArr = JSON.parse(window.localStorage.getItem('Naming'));
    
    document.getElementById("first_elem").innerHTML = StoredArr[0];
    /*document.getElementById("sec_elem").innerHTML = StoredArr[1];
    document.getElementById("thi_elem").innerHTML = StoredArr[2];
    document.getElementById("fou_elem").innerHTML = StoredArr[3];
    document.getElementById("fif_elem").innerHTML = StoredArr[4];
    document.getElementById("six_elem").innerHTML = StoredArr[5];
    document.getElementById("sev_elem").innerHTML = StoredArr[6];*/
    
    //document.getElementById("first_elem").innerHTML = window.localStorage.getItem('Naming');
})();


document.getElementById('ButPlus').onclick = function () {
    var timer, fullText, currentOffset, onComplete, wordSet;

    function Speak(person, text, callback) {
        //$("#name").html(person);
        fullText = text;

        wordSet = text.split('');
        currentOffset = 0;
        onComplete = callback;
        timer = setInterval(onTick, 107);
    }

    function onTick() {
        currentOffset++;
        if (currentOffset == wordSet.length) {
            complete();
            return;
        }
        var text = "";

        for (var i = 0; i < currentOffset; i++) {

            text += wordSet[i];

        }
        text.trim();

        $("#message").html(text);

    }

    function complete() {
        clearInterval(timer);
        timer = null;

        $("#message").html(fullText);
        if (onComplete) onComplete();
    }

    /*$(".box").click(function () {
        complete();
    });*/

    Speak("Simon",
        "         Enter an event below sir"
    /*
    function () {
        setTimeout(function () {
            Speak("Javascript", "Enter an event below");
        }, 2000);
    }*/);
}