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
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        alert('here too');
        var today = new Date();
        var hous = today.getHours();
        var mins = today.getMinutes();
        if (hous < 12)
        {
            swal('Good morning Mr Kafwilo');
        }
        else if (hous >= 12 && hous < 18)
        {
            swal('Good afternoon Mr Kafwilo');
        }
        else if (hous >= 18)
        {
            swal('Good evening Mr Kafwilo');
        }
        document.getElementById('ButSchedule').onclick = function () {

            alert('Displaying schedule');

        }
        document.getElementById('ButEvents').onclick = function () {

            alert('Displaying Upcoming Events');

        }
        

        document.getElementById('ButMaps').onclick = function () {

            alert('Displaying Maps');

        }
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