(function () {
    var chosen_day;
    var chosen_time;
    var chosen_title;
    var index_day;
    

document.getElementById('ButSub').onclick=function()
{
    if (day == "Sunday")
    {
        index_day = '0';
    }
    else if (day == "Monday") {
        index_day = '1';
    }
    else if (day == "Tuesday") {
        index_day = '2';
    }
    else if (day == "Wednesday") {
        index_day = '3';
    }
    else if (day == "Thursday") {
        index_day = '4';
    }
    else if (day == "Friday") {
        index_day = '5';
    }
    else if (day == "Saturday") {
        index_day = '6';
    }

   
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

    document.getElementById('back').onclick=function()
{
        window.close();
        
        location.href = 'index.html';
       
    }
    if (index_day == '0')
    {
            document.getElementById("first_elem").innerHTML = window.localStorage.getItem('Naming');
    }
    else if (index_day == '1') {
        document.getElementById("sec_elem").innerHTML = window.localStorage.getItem('Naming');
    }
    else if (index_day == '2') {
        document.getElementById("thi_elem").innerHTML = window.localStorage.getItem('Naming');
    }
   else if (index_day == '3') {
        document.getElementById("fou_elem").innerHTML = window.localStorage.getItem('Naming');
    }
    else if (index_day == '4') {
        document.getElementById("fif_elem").innerHTML = window.localStorage.getItem('Naming');
    }
    else if (index_day == '5') {
        document.getElementById("six_elem").innerHTML = window.localStorage.getItem('Naming');
    }
    else if (index_day == '6') {
        document.getElementById("sev_elem").innerHTML = window.localStorage.getItem('Naming');
    }
})();
document.getElementById('ButPlus').onclick=function(){
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