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
        var hous = today.getHours();
        var mins = today.getMinutes();
        var count;
        
  
        if (count != 0) {
            if (hous < 12) {
                window.localStorage.setItem(count, '0');
                swal('Good morning Mr Kafwilo');
            }
            else if (hous >= 12 && hous < 18) {
                window.localStorage.setItem(count, '0');
                swal('Good afternoon Mr Kafwilo');
            }
            else if (hous >= 18) {
                window.localStorage.setItem(count, '0');
                swal('Good evening Mr Kafwilo');
            }
        }
        document.getElementById('ButSchedule').onclick = function () {

            // alert('Displaying schedule');
            count = 0;
            location.href = 'practiceFye.html';

        }
        document.getElementById('ButEvents').onclick = function () {
            count = 0;
            //alert('Displaying Upcoming Events');
            location.href = 'practiceFye.html';
        }


        document.getElementById('ButMaps').onclick = function () {
            count = 0;
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
} )();