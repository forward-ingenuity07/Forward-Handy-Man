

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
                if(days[0][i]=="")
                {
                    index = i;
                    break;

                }
                

            }
           
            window.localStorage.setItem("Local_day"+"0"+index, Naam.value);
           // window.localStorage.setItem("Arr.day1", Naam.value);
        }
           /* 
        else if (e.options[e.selectedIndex].value == "Monday") {
            //Using Local_day
            for (i = 0; i < 10; i++) {
                if (days[1][i] == "") {
                    index = i;
                    break;

                }
                

            }
           
            window.localStorage.setItem("Local_day"+"1" + index, Naam.value);


           // window.localStorage.setItem("Arr.day2", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Tuesday") {

            for (i = 0; i < 10; i++) {
                if (days[2][i] == "") {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "2" + index, Naam.value);


           // window.localStorage.setItem("Arr.day3", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Wednesday") {
            for (i = 0; i < 10; i++) {
                if (days[1][i] == "") {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "3" + index, Naam.value);


           // window.localStorage.setItem("Arr.day4", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Thursday") {

            for (i = 0; i < 10; i++) {
                if (days[4][i] == "") {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "4" + index, Naam.value);


           // window.localStorage.setItem("Arr.day5", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Friday") {

            for (i = 0; i < 10; i++) {
                if (days[5][i] == "") {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "5" + index, Naam.value);

 //           window.localStorage.setItem("Arr.day6", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Saturday") {

            for (i = 0; i < 10; i++) {
                if (days[6][i] == "") {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "6" + index, Naam.value);

            //window.localStorage.setItem("Arr.day7", Naam.value);
        }
  
        window.localStorage.setItem('tabe', '1');
        */
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
        //var row = table.insertRow(2);
        
        var row = [table.insertRow[0], table.insertRow[1], table.insertRow[2], table.insertRow[3], table.insertRow[4], table.insertRow[5], table.insertRow[6], table.insertRow[7], table.insertRow[8], table.insertRow[9]];
        var cell = [[row[0].insertCell(0), row[0].insertCell(1), row[0].insertCell(2), row[0].insertCell(3), row[0].insertCell(4), row[0].insertCell(5), row[0].insertCell(6)], [row[1].insertCell(0), row[1].insertCell(1), row[1].insertCell(2), row[1].insertCell(3), row[1].insertCell(4), row[1].insertCell(5), row[1].insertCell(6)], [row[2].insertCell(0), row[2].insertCell(1), row[2].insertCell(2), row[2].insertCell(3), row[2].insertCell(4), row[2].insertCell(5), row[2].insertCell(6)], [row[3].insertCell(0), row[3].insertCell(1), row[3].insertCell(2), row[3].insertCell(3), row[3].insertCell(4), row[3].insertCell(5), row[3].insertCell(6)], [row[4].insertCell(0), row[4].insertCell(1), row[4].insertCell(2), row[4].insertCell(3), row[4].insertCell(4), row[4].insertCell(5), row[4].insertCell(6)], [row[4].insertCell(0), row[4].insertCell(1), row[4].insertCell(2), row[4].insertCell(3), row[4].insertCell(4), row[4].insertCell(5), row[4].insertCell(6)], [row[5].insertCell(0), row[5].insertCell(1), row[5].insertCell(2), row[5].insertCell(3), row[5].insertCell(4), row[5].insertCell(5), row[5].insertCell(6)], [row[6].insertCell(0), row[6].insertCell(1), row[6].insertCell(2), row[6].insertCell(3), row[6].insertCell(4), row[6].insertCell(5), row[6].insertCell(6)], [row[7].insertCell(0), row[7].insertCell(1), row[7].insertCell(2), row[7].insertCell(3), row[7].insertCell(4), row[7].insertCell(5), row[7].insertCell(6)], [row[8].insertCell(0), row[8].insertCell(1), row[8].insertCell(2), row[8].insertCell(3), row[8].insertCell(4), row[8].insertCell(5), row[8].insertCell(6)], [row[9].insertCell(0), row[9].insertCell(1), row[9].insertCell(2), row[9].insertCell(3), row[9].insertCell(4), row[9].insertCell(5), row[9].insertCell(6)]];
        for (i = 0; i < 10; i++)
        {
            row[i].className = "danger";
            for (j = 0; j < 6;j++)
                {
                cell[i][j].innerHTML = window.localStorage.getItem("Local_day" + j + i);
            }
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

