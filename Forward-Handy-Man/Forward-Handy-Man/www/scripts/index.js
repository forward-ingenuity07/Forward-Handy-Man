// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";
    
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        //    alert('G')
        //swal('Working');
        // Handle the Cordova pause and resume events
        var today = new Date();
        var hous = today.getHours();
        var mins = today.getMinutes();
        
        var firstime = new Date().setHours(0, 0, 0, 0);
        firstTime = new Date().getTime();
        if(window.localStorage.getItem('firstTime') == null){
            window.localStorage.setItem('firstTime', firstTime);
        }

        else {

            var storedTime = window.localStorage.getItem('firstTime');

            // Get a new date, zero it as above and see if its the same time
            // If not, it must be a different day
            var secondTime = new Date().setHours(0, 0, 0, 0)

            if (secondTime != +firstTime) {
   //             alert("Second time is a different day");

            }

            else {
                if (hous < 12) {
                    swal('Good morning Mr Kafwilo');
                }
                else if (hous >= 12 && hous < 18) {
                    swal('Good afternoon Mr Kafwilo');
                }
                else if (hous >= 18) {
                    swal('Good evening Mr Kafwilo');
                }

 //               alert("First time is the same day");
            }
        }
        
        
        document.getElementById('ButSchedule').onclick = function () {

            // alert('Displaying schedule');
            count = count + 1;
            location.href = 'practiceFye.html';

        }
        document.getElementById('ButEvents').onclick = function () {
            count = count + 1;
            //alert('Displaying Upcoming Events');
            location.href = 'practiceFye.html';
        }


        document.getElementById('ButMaps').onclick = function () {
            count = count + 1;
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
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();