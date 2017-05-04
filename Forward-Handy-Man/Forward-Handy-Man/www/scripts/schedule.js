

(function () {
    var chosen_day;
    var chosen_time;
    var chosen_title;
   

    obj = new Object(["Val"]);
    document.getElementById('ButSub').onclick=function()
    {
        var days = [["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""]];
        
      /*  for (i = 0; i < 10; i++)
        {
            days[0][i] = window.localStorage.getItem("Local_day" + "0" + i);
            days[1][i] = window.localStorage.getItem("Local_day" + "1" + i);
            days[2][i] = window.localStorage.getItem("Local_day" + "2" + i);
            days[3][i] = window.localStorage.getItem("Local_day" + "3" + i);
            days[4][i] = window.localStorage.getItem("Local_day" + "4" + i);
            days[5][i] = window.localStorage.getItem("Local_day" + "5" + i);
            days[6][i] = window.localStorage.getItem("Local_day" + "6" + i);
            
        }
       */
        var index=0;
        var e = document.getElementById("day_chosen");
        var h = document.getElementById("hour_chosen");
        var m = document.getElementById("minute_chosen");
        var Naam = document.getElementById('Naming');
        //var Arr = { day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "",then8:""};
        if (e.options[e.selectedIndex].value == "Sunday") {

            //Using Local_day
            for (i = 0; i < 10; i++)
            {
                if((window.localStorage.getItem("Local_day" + "0" + i)).length==0)
                {
                    index = i;
                    break;

                }
                

            }
           
            window.localStorage.setItem("Local_day"+"0"+index, Naam.value);
           // window.localStorage.setItem("Arr.day1", Naam.value);
        }
            
        else if (e.options[e.selectedIndex].value == "Monday") {
            //Using Local_day
            for (i = 0; i < 10; i++) {
                if ((window.localStorage.getItem("Local_day" + "1" + i)).length==0) {
                    index = i;
                    break;

                }
                

            }
           
            window.localStorage.setItem("Local_day"+"1" + index, Naam.value);


           // window.localStorage.setItem("Arr.day2", Naam.value);
        }
            
        else if (e.options[e.selectedIndex].value == "Tuesday") {

            for (i = 0; i < 10; i++) {
                if ((window.localStorage.getItem("Local_day" + "2" + i)).length==0) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "2" + index, Naam.value);


           // window.localStorage.setItem("Arr.day3", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Wednesday") {
            for (i = 0; i < 10; i++) {
                if ((window.localStorage.getItem("Local_day" + "3" + i)).length==0) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "3" + index, Naam.value);


           // window.localStorage.setItem("Arr.day4", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Thursday") {

            for (i = 0; i < 10; i++) {
                if ((window.localStorage.getItem("Local_day" + "4" + i)).length==0) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "4" + index, Naam.value);


           // window.localStorage.setItem("Arr.day5", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Friday") {

            for (i = 0; i < 10; i++) {
                if ((window.localStorage.getItem("Local_day" + "5" + i)).length==0) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "5" + index, Naam.value);

 //           window.localStorage.setItem("Arr.day6", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Saturday") {

            for (i = 0; i < 10; i++) {
                if ((window.localStorage.getItem("Local_day" + "6" + i)).length==0) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "6" + index, Naam.value);

            //window.localStorage.setItem("Arr.day7", Naam.value);
        }
  
        window.localStorage.setItem('tabe', '1');
        
    //Naam = document.getElementById('Naming');
   // window.localStorage.setItem('Naming', Naam.value);
   // Arr[1] = { value: document.getElementById('Naming') };
    // window.localStorage.setItem('Naming', (JSON.stringify(Arr)));
   // window.localStorage.setItem("Naming", (JSON.stringify(Arr)));
    //window.localStorage.setItem("obj", (JSON.stringify(Arr)));
    alert('Submitted');
    //window.localStorage.setItem("Arr.then8", "1");
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
    //var StoredArr = JSON.parse(window.localStorage.getItem('Naming'));
    //var StoredArr = JSON.parse(this.window.localStorage.getItem("Naming"));
   /* document.getElementById("first_elem").innerHTML = window.localStorage.getItem("Arr.day1");
    document.getElementById("sec_elem").innerHTML = window.localStorage.getItem("Arr.day2");
    document.getElementById("thi_elem").innerHTML = window.localStorage.getItem("Arr.day3");
    document.getElementById("fou_elem").innerHTML = window.localStorage.getItem("Arr.day4");
    document.getElementById("fif_elem").innerHTML = window.localStorage.getItem("Arr.day5");
    document.getElementById("six_elem").innerHTML = window.localStorage.getItem("Arr.day6");
    document.getElementById("sev_elem").innerHTML = window.localStorage.getItem("Arr.day7");*/
    if(window.localStorage.getItem('tabe')=='1')
    {
        var table = document.getElementById("schedule_table");
        var row1 = table.insertRow(1);
        var row2 = table.insertRow(2);
        var row3 = table.insertRow(3);
        var row4 = table.insertRow(4);
        var row5 = table.insertRow(5);
        var row6 = table.insertRow(6);
        var row7 = table.insertRow(7);
        var row8 = table.insertRow(8);
        var row9 = table.insertRow(9);
        var row10 = table.insertRow(10);

        /*var row = [table.insertRow[0], table.insertRow[1], table.insertRow[2], table.insertRow[3], table.insertRow[4], table.insertRow[5], table.insertRow[6], table.insertRow[7], table.insertRow[8], table.insertRow[9]];
        var cell = [[row[0].insertCell(0), row[0].insertCell(1), row[0].insertCell(2), row[0].insertCell(3), row[0].insertCell(4), row[0].insertCell(5), row[0].insertCell(6)], [row[1].insertCell(0), row[1].insertCell(1), row[1].insertCell(2), row[1].insertCell(3), row[1].insertCell(4), row[1].insertCell(5), row[1].insertCell(6)], [row[2].insertCell(0), row[2].insertCell(1), row[2].insertCell(2), row[2].insertCell(3), row[2].insertCell(4), row[2].insertCell(5), row[2].insertCell(6)], [row[3].insertCell(0), row[3].insertCell(1), row[3].insertCell(2), row[3].insertCell(3), row[3].insertCell(4), row[3].insertCell(5), row[3].insertCell(6)], [row[4].insertCell(0), row[4].insertCell(1), row[4].insertCell(2), row[4].insertCell(3), row[4].insertCell(4), row[4].insertCell(5), row[4].insertCell(6)], [row[4].insertCell(0), row[4].insertCell(1), row[4].insertCell(2), row[4].insertCell(3), row[4].insertCell(4), row[4].insertCell(5), row[4].insertCell(6)], [row[5].insertCell(0), row[5].insertCell(1), row[5].insertCell(2), row[5].insertCell(3), row[5].insertCell(4), row[5].insertCell(5), row[5].insertCell(6)], [row[6].insertCell(0), row[6].insertCell(1), row[6].insertCell(2), row[6].insertCell(3), row[6].insertCell(4), row[6].insertCell(5), row[6].insertCell(6)], [row[7].insertCell(0), row[7].insertCell(1), row[7].insertCell(2), row[7].insertCell(3), row[7].insertCell(4), row[7].insertCell(5), row[7].insertCell(6)], [row[8].insertCell(0), row[8].insertCell(1), row[8].insertCell(2), row[8].insertCell(3), row[8].insertCell(4), row[8].insertCell(5), row[8].insertCell(6)], [row[9].insertCell(0), row[9].insertCell(1), row[9].insertCell(2), row[9].insertCell(3), row[9].insertCell(4), row[9].insertCell(5), row[9].insertCell(6)]];
        */
        row1.className = "danger";
        row2.className = "danger";
        row3.className = "danger";
        row4.className = "danger";
        row5.className = "danger";
        row6.className = "danger";
        row7.className = "danger";
        row8.className = "danger";
        row9.className = "danger";
        row10.className = "danger";
        var cell1 = [row1.insertCell(0), row1.insertCell(1), row1.insertCell(2), row1.insertCell(3), row1.insertCell(4), row1.insertCell(5), row1.insertCell(6)];
        var cell2 = [row2.insertCell(0), row2.insertCell(1), row2.insertCell(2), row2.insertCell(3), row2.insertCell(4), row2.insertCell(5), row2.insertCell(6)];
        var cell3 = [row3.insertCell(0), row3.insertCell(1), row3.insertCell(2), row3.insertCell(3), row3.insertCell(4), row3.insertCell(5), row3.insertCell(6)];
        var cell4 = [row4.insertCell(0), row4.insertCell(1), row4.insertCell(2), row4.insertCell(3), row4.insertCell(4), row4.insertCell(5), row4.insertCell(6)];
        var cell5 = [row5.insertCell(0), row5.insertCell(1), row5.insertCell(2), row5.insertCell(3), row5.insertCell(4), row5.insertCell(5), row5.insertCell(6)];
        var cell6 = [row6.insertCell(0), row6.insertCell(1), row6.insertCell(2), row6.insertCell(3), row6.insertCell(4), row6.insertCell(5), row6.insertCell(6)];
        var cell7 = [row7.insertCell(0), row7.insertCell(1), row7.insertCell(2), row7.insertCell(3), row7.insertCell(4), row7.insertCell(5), row7.insertCell(6)];
        var cell8 = [row8.insertCell(0), row8.insertCell(1), row8.insertCell(2), row8.insertCell(3), row8.insertCell(4), row8.insertCell(5), row8.insertCell(6)];
        var cell9 = [row9.insertCell(0), row9.insertCell(1), row9.insertCell(2), row9.insertCell(3), row9.insertCell(4), row9.insertCell(5), row9.insertCell(6)];
        var cell10 = [row10.insertCell(0), row10.insertCell(1), row10.insertCell(2), row10.insertCell(3), row10.insertCell(4), row10.insertCell(5), row10.insertCell(6)];
        

        for (i = 0; i < 6; i++)
        {
            
      
                
            cell1[i].innerHTML = window.localStorage.getItem("Local_day" + i + "0");
            cell2[i].innerHTML = window.localStorage.getItem("Local_day" + i + "1");
            cell3[i].innerHTML = window.localStorage.getItem("Local_day" + i + "2");
            cell4[i].innerHTML = window.localStorage.getItem("Local_day" + i + "3");
            cell5[i].innerHTML = window.localStorage.getItem("Local_day" + i + "4");
            cell6[i].innerHTML = window.localStorage.getItem("Local_day" + i + "5");
            cell7[i].innerHTML = window.localStorage.getItem("Local_day" + i + "6");
            cell8[i].innerHTML = window.localStorage.getItem("Local_day" + i + "7");
            cell9[i].innerHTML = window.localStorage.getItem("Local_day" + i + "8");
            cell10[i].innerHTML = window.localStorage.getItem("Local_day" + i + "8");
            
            //cell[1].innerHTML = "NEW CELL2";
        }
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

