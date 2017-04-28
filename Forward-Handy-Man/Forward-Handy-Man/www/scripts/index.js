// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";
    
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);


    function onDeviceReady() {
        //    alert('G')
        //swal('Working');
        // Handle the Cordova pause and resume events
        
        var today = new Date();
        var day = today.getDay();
        var hous = today.getHours();
        var mins = today.getMinutes();
        window.localStorage.setItem('new_date', day.value);
        if (window.localStorage.getItem('new_date') !== window.localStorage.getItem('old_date'))
        {
            window.localStorage.setItem('old_date', (window.localStorage.getItem('new_date')).value);
            window.localStorage.setItem('count', '0');
        }
       
      //  if (window.localStorage.getItem('count') !== '1')
        //    {


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

            swal(text);

        }

        function complete() {
            clearInterval(timer);
            timer = null;

            $("#message").html(fullText);
            if (onComplete) onComplete();
        }


        if (hous < 12) {
            window.localStorage.setItem('count', '1');
            //swal('Good morning Mr Kafwilo');
            Speak("Simon",
    "Good morning Mr Kafwilo");
        }
        else if (hous >= 12 && hous < 18) {
            window.localStorage.setItem('count', '1');
            swal('Good afternoon Mr Kafwilo');
        }
        else if (hous >= 18) {
            window.localStorage.setItem('count', '1');
            swal('Good evening Mr Kafwilo');
        }
       // }
        

        document.getElementById('ButSchedule').onclick = function () {

            // alert('Displaying schedule');
           // count = 0;
            location.href = 'schedule.html';

        }
        document.getElementById('ButEvents').onclick = function () {
            //count = 0;
            //alert('Displaying Upcoming Events');
            location.href = 'practiceFye.html';
        }


        document.getElementById('ButMaps').onclick = function () {
            //count = 0;
            //alert('Displaying Maps');
            location.href = 'practiceFye.html';
        }

        
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        alert('here too');
        
        /*document.getElementById('Checking').onclick = function () {
            function sayHi() {
                var newHeader = goog.dom.createDom('p', { 'style': 'color:white' },
                  'Hello world!');
                goog.dom.appendChild(document.getElementById('ThisPar'), newHeader);
            };

        };*/

        //goog.require('goog.dom');

        
    };



    function onPause() {
        var count = 0;
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        var count = 0;
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

