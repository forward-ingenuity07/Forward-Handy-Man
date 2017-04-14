// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
    //    alert('G')
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        /*document.getElementById('Checking').onclick = function () {
            function sayHi() {
                var newHeader = goog.dom.createDom('p', { 'style': 'color:white' },
                  'Hello world!');
                goog.dom.appendChild(document.getElementById('ThisPar'), newHeader);
            };

        };*/

        //goog.require('goog.dom');
        var today = new Date();

        var dd = today.getDate();
        var mm = today.getMonth() + 1;//January is 0, so always add + 1
        var yyyy = today.getFullYear();
        var hou = today.getHours();
        var min = today.getMinutes();
        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }
        today = mm + '/' + dd + '/' + yyyy;
        document.getElementById('Checking').onclick= function() {
            alert("Today's date is: " + today + "\n" +"The time is: "+ hou+":"+min);

        }
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();