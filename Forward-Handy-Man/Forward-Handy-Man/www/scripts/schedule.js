
(function () {
    var chosen_day;
    var chosen_time;
    var chosen_title;
    
    obj = new Object(["Val"]);
    document.getElementById('ButSub').onclick=function()
    {
        var e = document.getElementById("day_chosen");
       
        var Naam = document.getElementById('Naming');
        var Arr = { day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "",then8:""};
        if (e.options[e.selectedIndex].value == "Sunday") {
            window.localStorage.setItem("Arr.day1", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Monday") {
            window.localStorage.setItem("Arr.day2", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Tuesday") {
            window.localStorage.setItem("Arr.day3", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Wednesday") {
            window.localStorage.setItem("Arr.day4", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Thursday") {
            window.localStorage.setItem("Arr.day5", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Friday") {
            window.localStorage.setItem("Arr.day6", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Saturday") {
            window.localStorage.setItem("Arr.day7", Naam.value);
        }
        
    //Naam = document.getElementById('Naming');
   // window.localStorage.setItem('Naming', Naam.value);
   // Arr[1] = { value: document.getElementById('Naming') };
    // window.localStorage.setItem('Naming', (JSON.stringify(Arr)));
    window.localStorage.setItem("Naming", (JSON.stringify(Arr)));
    window.localStorage.setItem("obj", (JSON.stringify(Arr)));
    alert('Submitted');
    window.localStorage.setItem("Arr.then8", "1");
   // var Naam = document.getElementById('Naming');
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
    //var StoredArr = JSON.parse(this.window.localStorage.getItem("Naming"));
    document.getElementById("first_elem").innerHTML = window.localStorage.getItem("Arr.day1");
    document.getElementById("sec_elem").innerHTML = window.localStorage.getItem("Arr.day2");
    document.getElementById("thi_elem").innerHTML = window.localStorage.getItem("Arr.day3");
    document.getElementById("fou_elem").innerHTML = window.localStorage.getItem("Arr.day4");
    document.getElementById("fif_elem").innerHTML = window.localStorage.getItem("Arr.day5");
    document.getElementById("six_elem").innerHTML = window.localStorage.getItem("Arr.day6");
    document.getElementById("sev_elem").innerHTML = window.localStorage.getItem("Arr.day7");
    if(window.localStorage.getItem("Arr.then8")=="1")
    {
        var parentElement = document.getElementById('second_row');
        parentElement.setAttribute('style', 'display:normal;');
        

    }
   // document.getElementById("first_elem").innerHTML = window.localStorage.getItem('Naming');
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