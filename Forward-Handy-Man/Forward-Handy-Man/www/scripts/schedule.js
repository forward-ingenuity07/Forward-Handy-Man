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

    document.getElementById('back').onclick=function()
{
        window.close();
        location.href = 'index.html';
       
}
document.getElementById("first_elem").innerHTML = window.localStorage.getItem('Naming');

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
    "     Enter an event below sir"
/*
function () {
    setTimeout(function () {
        Speak("Javascript", "Enter an event below");
    }, 2000);
}*/);
}