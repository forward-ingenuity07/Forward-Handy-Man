

(function () {
    var chosen_day;
    var chosen_time;
    var chosen_title;
    
    document.getElementById("Agreeing").onclick = function () {

        /*for (j = 0; j < 10; j++)
            {
            window.localStorage.setItem('Local_day'+"0"+j,null);
            window.localStorage.setItem('Local_day' + "1" + j,null);
            window.localStorage.setItem('Local_day' + "2" + j,null);
            window.localStorage.setItem('Local_day' + "3" + j,null);
            window.localStorage.setItem('Local_day' + "4" + j,null);
            window.localStorage.setItem('Local_day' + "5" + j,null);
            window.localStorage.setItem('Local_day' + "6" + j,null);
        
        }*/
        var inner=0;
        var outer=0;

        while(window.localStorage.getItem("Local_day"+"0"+outer)!==null)
        {
            window.localStorage.removeItem("Local_day" + "0" + outer);
            outer++;


        }
        outer = 0;
        while (window.localStorage.getItem("Local_day" + "1" + outer) !== null) {

            window.localStorage.removeItem("Local_day" + "1" + outer);
            outer++;


        }
        outer = 0;
        while (window.localStorage.getItem("Local_day" + "2" + outer) !== null) {

            window.localStorage.removeItem("Local_day" + "2" + outer);
            outer++;


        }
        outer = 0;
        while (window.localStorage.getItem("Local_day" + "3" + outer) !== null) {

            window.localStorage.removeItem("Local_day" + "3" + outer);
            outer++;



        }
        outer = 0;
        while (window.localStorage.getItem("Local_day" + "4" + outer) !== null) {

            window.localStorage.removeItem("Local_day" + "4" + outer);
            outer++;


        }
        outer = 0;
        while (window.localStorage.getItem("Local_day" + "5" + outer) !== null) {

            window.localStorage.removeItem("Local_day" + "5" + outer);
            outer++;


        }
        outer = 0;
        while (window.localStorage.getItem("Local_day" + "6" + outer) !== null) {

            window.localStorage.removeItem("Local_day" + "6" + outer);
            outer++;


        }
        window.location.reload();
    }

    obj = new Object(["Val"]);
    document.getElementById('ButSub').onclick=function()
    {

        //var days = [["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""]];
        var set=0;
        var sel = 0;
        var swap;
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

      /*  
        for (j = 0; j < 10; j++) {
            if (window.localStorage.getItem('Local_day' + "0" + j) === null)
            {

                window.localStorage.setItem('Local_day' + "0" + j, " ");
                
            }
            
            if (window.localStorage.getItem('Local_day' + "1" + j) === null) {

                window.localStorage.setItem('Local_day' + "1" + j, " ");

            }

            if (window.localStorage.getItem('Local_day' + "2" + j) === null) {

                window.localStorage.setItem('Local_day' + "2" + j, " ");

            }

            if (window.localStorage.getItem('Local_day' + "3" + j) === null) {

                window.localStorage.setItem('Local_day' + "3" + j, " ");

            }
            if (window.localStorage.getItem('Local_day' + "4" + j) === null) {

                window.localStorage.setItem('Local_day' + "4" + j, " ");

            }

            if (window.localStorage.getItem('Local_day' + "5" + j) === null) {

                window.localStorage.setItem('Local_day' + "5" + j, " ");

            }
            if (window.localStorage.getItem('Local_day' + "6" + j) === null) {

                window.localStorage.setItem('Local_day' + "6" + j, " ");

            }



            if (window.localStorage.getItem('Local_hour' + "0" + j) === null) {

                window.localStorage.setItem('Local_hour' + "0" + j, " ");
                
            }
            if (window.localStorage.getItem('Local_hour' + "1" + j) === null) {

                window.localStorage.setItem('Local_hour' + "1" + j, " ");

            }
            if (window.localStorage.getItem('Local_hour' + "2" + j) === null) {

                window.localStorage.setItem('Local_hour' + "2" + j, " ");

            }
            if (window.localStorage.getItem('Local_hour' + "3" + j) === null) {

                window.localStorage.setItem('Local_hour' + "3" + j, " ");

            }
            if (window.localStorage.getItem('Local_hour' + "4" + j) === null) {

                window.localStorage.setItem('Local_hour' + "4" + j, " ");

            }
            if (window.localStorage.getItem('Local_hour' + "5" + j) === null) {

                window.localStorage.setItem('Local_hour' + "5" + j, " ");

            }
            if (window.localStorage.getItem('Local_hour' + "6" + j) === null) {

                window.localStorage.setItem('Local_hour' + "6" + j, " ");

            }


            if (window.localStorage.getItem('Local_minute' + "0" + j) === null) {

                window.localStorage.setItem('Local_minute' + "0" + j, " ");
            }

            if (window.localStorage.getItem('Local_minute' + "1" + j) === null) {

                window.localStorage.setItem('Local_minute' + "1" + j, " ");
            }
            if (window.localStorage.getItem('Local_minute' + "2" + j) === null) {

                window.localStorage.setItem('Local_minute' + "2" + j, " ");
            }
            if (window.localStorage.getItem('Local_minute' + "3" + j) === null) {

                window.localStorage.setItem('Local_minute' + "3" + j, " ");
            }
            if (window.localStorage.getItem('Local_minute' + "4" + j) === null) {

                window.localStorage.setItem('Local_minute' + "4" + j, " ");
            }
            if (window.localStorage.getItem('Local_minute' + "5" + j) === null) {

                window.localStorage.setItem('Local_minute' + "5" + j, " ");
            }
            if (window.localStorage.getItem('Local_minute' + "6" + j) === null) {

                window.localStorage.setItem('Local_minute' + "6" + j, " ");
            }
        }*/


        var index=0;
        var e = document.getElementById("day_chosen");
        var h = document.getElementById("hour_chosen");
        var m = document.getElementById("minute_chosen");
        var Naam = document.getElementById('Naming');
        var temp="";
        var temp1="";
        var del;
        //var Arr = { day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "",then8:""};
        if (e.options[e.selectedIndex].value == "Sunday") {

            //Using Local_day
            for (i = 0; i < 10; i++)
            {
                if(window.localStorage.getItem("Local_day" + "0" + i)===null)
                {
                    index = i;
                    break;

                }
                
            }
           
            window.localStorage.setItem("Local_day" + "0" + index, Naam.value);
            window.localStorage.setItem("Local_hour" + "0" + index, h.options[h.selectedIndex].value);
            window.localStorage.setItem("Local_minute" + "0" + index, m.options[m.selectedIndex].value);

            //sorting algorithm
            do {
                sel = 0;
                swap = 0;
                while (window.localStorage.getItem("Local_day" + "0" + sel) !== null) {
                    del = sel + 1;
                    if (window.localStorage.getItem("Local_day" + "0" + del) !== null) {
                        if (window.localStorage.getItem("Local_hour" + "0" + sel) > window.localStorage.getItem("Local_hour" + "0" + del)) {
                            swap = 1;
                            //change entry
                            temp = window.localStorage.getItem("Local_day" + "0" + sel);
                            temp1 = window.localStorage.getItem("Local_day" + "0" + del);

                            window.localStorage.setItem("Local_day" + "0" + sel, temp1);
                            window.localStorage.setItem("Local_day" + "0" + del, temp);


                            //change hours
                            temp = window.localStorage.getItem("Local_hour" + "0" + sel);
                            temp1 = window.localStorage.getItem("Local_hour" + "0" + del);

                            window.localStorage.setItem("Local_hour" + "0" + sel, temp1);
                            window.localStorage.setItem("Local_hour" + "0" + del, temp);

                            //change minutes
                            temp = window.localStorage.getItem("Local_minute" + "0" + sel);
                            temp1 = window.localStorage.getItem("Local_minute" + "0" + del);

                            window.localStorage.setItem("Local_minute" + "0" + sel, temp1);
                            window.localStorage.setItem("Local_minute" + "0" + del, temp);

                        }
                            //If hours are equal
                        else if (window.localStorage.getItem("Local_hour" + "0" + sel) == window.localStorage.getItem("Local_hour" + "0" + del)) {
                            if (window.localStorage.getItem("Local_minute" + "0" + sel) > window.localStorage.getItem("Local_minute" + "0" + del)) {
                                swap = 1;

                                temp = window.localStorage.getItem("Local_day" + "0" + sel);
                                temp1 = window.localStorage.getItem("Local_day" + "0" + del);

                                window.localStorage.setItem("Local_day" + "0" + sel, temp1);
                                window.localStorage.setItem("Local_day" + "0" + del, temp);


                                //change hours
                                temp = window.localStorage.getItem("Local_hour" + "0" + sel);
                                temp1 = window.localStorage.getItem("Local_hour" + "0" + del);

                                window.localStorage.setItem("Local_hour" + "0" + sel, temp1);
                                window.localStorage.setItem("Local_hour" + "0" + del, temp);

                                //change minutes
                                temp = window.localStorage.getItem("Local_minute" + "0" + sel);
                                temp1 = window.localStorage.getItem("Local_minute" + "0" + del);

                                window.localStorage.setItem("Local_minute" + "0" + sel, temp1);
                                window.localStorage.setItem("Local_minute" + "0" + del, temp);
                            }
                        }
                    }
                    sel++;
                }
            } while (swap == 1);
            //End of sorting
           // window.localStorage.setItem("Arr.day1", Naam.value);
        }
            
        else if (e.options[e.selectedIndex].value == "Monday") {
            //Using Local_day
            for (i = 0; i < 10; i++) {
                if (window.localStorage.getItem("Local_day" + "1" + i)===null) {
                    index = i;
                    break;

                }
                

            }
           
            window.localStorage.setItem("Local_day"+"1" + index, Naam.value);
            window.localStorage.setItem("Local_hour" + "1" + index, h.options[h.selectedIndex].value);
            window.localStorage.setItem("Local_minute" + "1" + index, m.options[m.selectedIndex].value);

            //sorting algorithm
            do {
                swap = 0;
                sel = 0;
                while (window.localStorage.getItem("Local_day" + "1" + sel) !== null) {
                    del = sel + 1;
                    if (window.localStorage.getItem("Local_day" + "1" + del) !== null) {
                        if (window.localStorage.getItem("Local_hour" + "1" + sel) > window.localStorage.getItem("Local_hour" + "1" + del)) {
                            //change entry
                            temp = window.localStorage.getItem("Local_day" + "1" + sel);
                            temp1 = window.localStorage.getItem("Local_day" + "1" + del);

                            window.localStorage.setItem("Local_day" + "1" + sel, temp1);
                            window.localStorage.setItem("Local_day" + "1" + del, temp);


                            //change hours
                            temp = window.localStorage.getItem("Local_hour" + "1" + sel);
                            temp1 = window.localStorage.getItem("Local_hour" + "1" + del);

                            window.localStorage.setItem("Local_hour" + "1" + sel, temp1);
                            window.localStorage.setItem("Local_hour" + "1" + del, temp);

                            //change minutes
                            temp = window.localStorage.getItem("Local_minute" + "1" + sel);
                            temp1 = window.localStorage.getItem("Local_minute" + "1" + del);

                            window.localStorage.setItem("Local_minute" + "1" + sel, temp1);
                            window.localStorage.setItem("Local_minute" + "1" + del, temp);

                        }
                            //If hours are equal
                        else if (window.localStorage.getItem("Local_hour" + "1" + sel) == window.localStorage.getItem("Local_hour" + "1" + del)) {
                            if (window.localStorage.getItem("Local_minute" + "1" + sel) > window.localStorage.getItem("Local_minute" + "1" + del)) {
                                swap = 1;

                                temp = window.localStorage.getItem("Local_day" + "1" + sel);
                                temp1 = window.localStorage.getItem("Local_day" + "1" + del);

                                window.localStorage.setItem("Local_day" + "1" + sel, temp1);
                                window.localStorage.setItem("Local_day" + "1" + del, temp);


                                //change hours
                                temp = window.localStorage.getItem("Local_hour" + "1" + sel);
                                temp1 = window.localStorage.getItem("Local_hour" + "1" + del);

                                window.localStorage.setItem("Local_hour" + "1" + sel, temp1);
                                window.localStorage.setItem("Local_hour" + "1" + del, temp);

                                //change minutes
                                temp = window.localStorage.getItem("Local_minute" + "1" + sel);
                                temp1 = window.localStorage.getItem("Local_minute" + "1" + del);

                                window.localStorage.setItem("Local_minute" + "1" + sel, temp1);
                                window.localStorage.setItem("Local_minute" + "1" + del, temp);
                            }
                        }


                    }
                    sel++;
                }
            } while (swap == 1);
            //End of sorting



           // window.localStorage.setItem("Arr.day2", Naam.value);
        }
            
        else if (e.options[e.selectedIndex].value == "Tuesday") {

            for (i = 0; i < 10; i++) {
                if (window.localStorage.getItem("Local_day" + "2" + i)===null) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "2" + index, Naam.value);
            window.localStorage.setItem("Local_hour" + "2" + index, h.options[h.selectedIndex].value);
            window.localStorage.setItem("Local_minute" + "2" + index, m.options[m.selectedIndex].value);

            //sorting algorithm
            do {
                sel = 0;
                swap = 0;
                while (window.localStorage.getItem("Local_day" + "2" + sel) !== null) {
                    del = sel + 1;
                    
                    if (window.localStorage.getItem("Local_day" + "2" + del) !== null) {
                        if (window.localStorage.getItem("Local_hour" + "2" + sel) > window.localStorage.getItem("Local_hour" + "2" + del)) {
                            //change entry
                            swap = 1;

                            temp = window.localStorage.getItem("Local_day" + "2" + sel);
                            temp1 = window.localStorage.getItem("Local_day" + "2" + del);

                            window.localStorage.setItem("Local_day" + "2" + sel, temp1);
                            window.localStorage.setItem("Local_day" + "2" + del, temp);


                            //change hours
                            temp = window.localStorage.getItem("Local_hour" + "2" + sel);
                            temp1 = window.localStorage.getItem("Local_hour" + "2" + del);

                            window.localStorage.setItem("Local_hour" + "2" + sel, temp1);
                            window.localStorage.setItem("Local_hour" + "2" + del, temp);

                            //change minutes
                            temp = window.localStorage.getItem("Local_minute" + "2" + sel);
                            temp1 = window.localStorage.getItem("Local_minute" + "2" + del);

                            window.localStorage.setItem("Local_minute" + "2" + sel, temp1);
                            window.localStorage.setItem("Local_minute" + "2" + del, temp);
                        }
                        //If hours are equal
                      else if (window.localStorage.getItem("Local_hour" + "2" + sel) == window.localStorage.getItem("Local_hour" + "2" + del))
                      {
                          if (window.localStorage.getItem("Local_minute" + "2" + sel) > window.localStorage.getItem("Local_minute" + "2" + del)) {
                              swap = 1;

                              temp = window.localStorage.getItem("Local_day" + "2" + sel);
                              temp1 = window.localStorage.getItem("Local_day" + "2" + del);

                              window.localStorage.setItem("Local_day" + "2" + sel, temp1);
                              window.localStorage.setItem("Local_day" + "2" + del, temp);


                              //change hours
                              temp = window.localStorage.getItem("Local_hour" + "2" + sel);
                              temp1 = window.localStorage.getItem("Local_hour" + "2" + del);

                              window.localStorage.setItem("Local_hour" + "2" + sel, temp1);
                              window.localStorage.setItem("Local_hour" + "2" + del, temp);

                              //change minutes
                              temp = window.localStorage.getItem("Local_minute" + "2" + sel);
                              temp1 = window.localStorage.getItem("Local_minute" + "2" + del);

                              window.localStorage.setItem("Local_minute" + "2" + sel, temp1);
                              window.localStorage.setItem("Local_minute" + "2" + del, temp);
                          }
                      }
                    }
                    sel++;
                }
            } while (swap == 1);
            //End of sorting



           // window.localStorage.setItem("Arr.day3", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Wednesday") {
            for (i = 0; i < 10; i++) {
                if (window.localStorage.getItem("Local_day" + "3" + i)===null) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "3" + index, Naam.value);
            window.localStorage.setItem("Local_hour" + "3" + index, h.options[h.selectedIndex].value);
            window.localStorage.setItem("Local_minute" + "3" + index, m.options[m.selectedIndex].value);

            //sorting algorithm
            do {
                sel = 0;
                swap = 0;
                while (window.localStorage.getItem("Local_day" + "3" + sel) !== null) {
                    del = sel + 1;
                    if (window.localStorage.getItem("Local_day" + "3" + del) !== null) {
                        if (window.localStorage.getItem("Local_hour" + "3" + sel) > window.localStorage.getItem("Local_hour" + "3" + del)) {
                            //change entry
                            swap = 1;
                            temp = window.localStorage.getItem("Local_day" + "3" + sel);
                            temp1 = window.localStorage.getItem("Local_day" + "3" + del);

                            window.localStorage.setItem("Local_day" + "3" + sel, temp1);
                            window.localStorage.setItem("Local_day" + "3" + del, temp);


                            //change hours
                            temp = window.localStorage.getItem("Local_hour" + "3" + sel);
                            temp1 = window.localStorage.getItem("Local_hour" + "3" + del);

                            window.localStorage.setItem("Local_hour" + "3" + sel, temp1);
                            window.localStorage.setItem("Local_hour" + "3" + del, temp);

                            //change minutes
                            temp = window.localStorage.getItem("Local_minute" + "3" + sel);
                            temp1 = window.localStorage.getItem("Local_minute" + "3" + del);

                            window.localStorage.setItem("Local_minute" + "3" + sel, temp1);
                            window.localStorage.setItem("Local_minute" + "3" + del, temp);

                        }
                            //If hours are equal
                        else if (window.localStorage.getItem("Local_hour" + "3" + sel) == window.localStorage.getItem("Local_hour" + "3" + del)) {
                            if (window.localStorage.getItem("Local_minute" + "3" + sel) > window.localStorage.getItem("Local_minute" + "3" + del)) {
                                swap = 1;

                                temp = window.localStorage.getItem("Local_day" + "3" + sel);
                                temp1 = window.localStorage.getItem("Local_day" + "3" + del);

                                window.localStorage.setItem("Local_day" + "3" + sel, temp1);
                                window.localStorage.setItem("Local_day" + "3" + del, temp);


                                //change hours
                                temp = window.localStorage.getItem("Local_hour" + "3" + sel);
                                temp1 = window.localStorage.getItem("Local_hour" + "3" + del);

                                window.localStorage.setItem("Local_hour" + "3" + sel, temp1);
                                window.localStorage.setItem("Local_hour" + "3" + del, temp);

                                //change minutes
                                temp = window.localStorage.getItem("Local_minute" + "3" + sel);
                                temp1 = window.localStorage.getItem("Local_minute" + "3" + del);

                                window.localStorage.setItem("Local_minute" + "3" + sel, temp1);
                                window.localStorage.setItem("Local_minute" + "3" + del, temp);
                            }
                        }

                    }
                    sel++;
                }
            } while (swap == 1);
            //End of sorting



           // window.localStorage.setItem("Arr.day4", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Thursday") {

            for (i = 0; i < 10; i++) {
                if (window.localStorage.getItem("Local_day" + "4" + i)===null) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "4" + index, Naam.value);
            window.localStorage.setItem("Local_hour" + "4" + index, h.options[h.selectedIndex].value);
            window.localStorage.setItem("Local_minute" + "4" + index, m.options[m.selectedIndex].value);

            //sorting algorithm
            do {
                swap = 0;
                sel = 0;
                while (window.localStorage.getItem("Local_day" + "4" + sel) !== null) {
                    del = sel + 1;
                    if (window.localStorage.getItem("Local_day" + "4" + del) !== null) {
                        if (window.localStorage.getItem("Local_hour" + "4" + sel) > window.localStorage.getItem("Local_hour" + "4" + del)) {
                            //change entry
                            swap = 1;
                            temp = window.localStorage.getItem("Local_day" + "4" + sel);
                            temp1 = window.localStorage.getItem("Local_day" + "4" + del);

                            window.localStorage.setItem("Local_day" + "4" + sel, temp1);
                            window.localStorage.setItem("Local_day" + "4" + del, temp);


                            //change hours
                            temp = window.localStorage.getItem("Local_hour" + "4" + sel);
                            temp1 = window.localStorage.getItem("Local_hour" + "4" + del);

                            window.localStorage.setItem("Local_hour" + "4" + sel, temp1);
                            window.localStorage.setItem("Local_hour" + "4" + del, temp);

                            //change minutes
                            temp = window.localStorage.getItem("Local_minute" + "4" + sel);
                            temp1 = window.localStorage.getItem("Local_minute" + "4" + del);

                            window.localStorage.setItem("Local_minute" + "4" + sel, temp1);
                            window.localStorage.setItem("Local_minute" + "4" + del, temp);

                        }
                            //If hours are equal
                        else if (window.localStorage.getItem("Local_hour" + "4" + sel) == window.localStorage.getItem("Local_hour" + "4" + del)) {
                            if (window.localStorage.getItem("Local_minute" + "4" + sel) > window.localStorage.getItem("Local_minute" + "4" + del)) {
                                swap = 1;

                                temp = window.localStorage.getItem("Local_day" + "4" + sel);
                                temp1 = window.localStorage.getItem("Local_day" + "4" + del);

                                window.localStorage.setItem("Local_day" + "4" + sel, temp1);
                                window.localStorage.setItem("Local_day" + "4" + del, temp);


                                //change hours
                                temp = window.localStorage.getItem("Local_hour" + "4" + sel);
                                temp1 = window.localStorage.getItem("Local_hour" + "4" + del);

                                window.localStorage.setItem("Local_hour" + "4" + sel, temp1);
                                window.localStorage.setItem("Local_hour" + "4" + del, temp);

                                //change minutes
                                temp = window.localStorage.getItem("Local_minute" + "4" + sel);
                                temp1 = window.localStorage.getItem("Local_minute" + "4" + del);

                                window.localStorage.setItem("Local_minute" + "4" + sel, temp1);
                                window.localStorage.setItem("Local_minute" + "4" + del, temp);
                            }
                        }

                    }
                    sel++;
                }
            } while (swap == 1);
            //End of sorting



           // window.localStorage.setItem("Arr.day5", Naam.value);
        }
        else if (e.options[e.selectedIndex].value == "Friday") {

            for (i = 0; i < 10; i++) {
                if (window.localStorage.getItem("Local_day" + "5" + i)===null) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "5" + index, Naam.value);
            window.localStorage.setItem("Local_hour" + "5" + index, h.options[h.selectedIndex].value);
            window.localStorage.setItem("Local_minute" + "5" + index, m.options[m.selectedIndex].value);
            //           window.localStorage.setItem("Arr.day6", Naam.value);

            //sorting algorithm
            do {
                swap = 0;
                sel = 0;
                while (window.localStorage.getItem("Local_day" + "5" + sel) !== null) {
                    del = sel + 1;
                    if (window.localStorage.getItem("Local_day" + "5" + del) !== null) {
                        if (window.localStorage.getItem("Local_hour" + "5" + sel) > window.localStorage.getItem("Local_hour" + "5" + del)) {
                            //change entry
                            swap = 1;
                            temp = window.localStorage.getItem("Local_day" + "5" + sel);
                            temp1 = window.localStorage.getItem("Local_day" + "5" + del);

                            window.localStorage.setItem("Local_day" + "5" + sel, temp1);
                            window.localStorage.setItem("Local_day" + "5" + del, temp);


                            //change hours
                            temp = window.localStorage.getItem("Local_hour" + "5" + sel);
                            temp1 = window.localStorage.getItem("Local_hour" + "5" + del);

                            window.localStorage.setItem("Local_hour" + "5" + sel, temp1);
                            window.localStorage.setItem("Local_hour" + "5" + del, temp);

                            //change minutes
                            temp = window.localStorage.getItem("Local_minute" + "5" + sel);
                            temp1 = window.localStorage.getItem("Local_minute" + "5" + del);

                            window.localStorage.setItem("Local_minute" + "5" + sel, temp1);
                            window.localStorage.setItem("Local_minute" + "5" + del, temp);

                        }
                            //If hours are equal
                        else if (window.localStorage.getItem("Local_hour" + "5" + sel) == window.localStorage.getItem("Local_hour" + "5" + del)) {
                            if (window.localStorage.getItem("Local_minute" + "5" + sel) > window.localStorage.getItem("Local_minute" + "5" + del)) {
                                swap = 1;

                                temp = window.localStorage.getItem("Local_day" + "5" + sel);
                                temp1 = window.localStorage.getItem("Local_day" + "5" + del);

                                window.localStorage.setItem("Local_day" + "5" + sel, temp1);
                                window.localStorage.setItem("Local_day" + "5" + del, temp);


                                //change hours
                                temp = window.localStorage.getItem("Local_hour" + "5" + sel);
                                temp1 = window.localStorage.getItem("Local_hour" + "5" + del);

                                window.localStorage.setItem("Local_hour" + "5" + sel, temp1);
                                window.localStorage.setItem("Local_hour" + "5" + del, temp);

                                //change minutes
                                temp = window.localStorage.getItem("Local_minute" + "5" + sel);
                                temp1 = window.localStorage.getItem("Local_minute" + "5" + del);

                                window.localStorage.setItem("Local_minute" + "5" + sel, temp1);
                                window.localStorage.setItem("Local_minute" + "5" + del, temp);
                            }
                        }

                    }
                    sel++;
                }
            } while (swap == 1);
            //End of sorting




        }
        else if (e.options[e.selectedIndex].value == "Saturday") {

            for (i = 0; i < 10; i++) {
                if (window.localStorage.getItem("Local_day" + "6" + i)===null) {
                    index = i;
                    break;

                }


            }
           
            window.localStorage.setItem("Local_day" + "6" + index, Naam.value);
            window.localStorage.setItem("Local_hour" + "6" + index, h.options[h.selectedIndex].value);
            window.localStorage.setItem("Local_minute" + "6" + index, m.options[m.selectedIndex].value);
            //window.localStorage.setItem("Arr.day7", Naam.value);
            //sorting algorithm
            do {
                swap = 0;
                sel = 0;
                while (window.localStorage.getItem("Local_day" + "6" + sel) !== null) {
                    del = sel + 1;
                    if (window.localStorage.getItem("Local_day" + "6" + del) !== null) {
                        if (window.localStorage.getItem("Local_hour" + "6" + sel) > window.localStorage.getItem("Local_hour" + "6" + del)) {
                            swap = 1;
                            //change entry
                            temp = window.localStorage.getItem("Local_day" + "6" + sel);
                            temp1 = window.localStorage.getItem("Local_day" + "6" + del);

                            window.localStorage.setItem("Local_day" + "6" + sel, temp1);
                            window.localStorage.setItem("Local_day" + "6" + del, temp);


                            //change hours
                            temp = window.localStorage.getItem("Local_hour" + "6" + sel);
                            temp1 = window.localStorage.getItem("Local_hour" + "6" + del);

                            window.localStorage.setItem("Local_hour" + "6" + sel, temp1);
                            window.localStorage.setItem("Local_hour" + "6" + del, temp);

                            //change minutes
                            temp = window.localStorage.getItem("Local_minute" + "6" + sel);
                            temp1 = window.localStorage.getItem("Local_minute" + "6" + del);

                            window.localStorage.setItem("Local_minute" + "6" + sel, temp1);
                            window.localStorage.setItem("Local_minute" + "6" + del, temp);

                        }
                        else if (window.localStorage.getItem("Local_hour" + "6" + sel) == window.localStorage.getItem("Local_hour" + "6" + del)) {
                            if (window.localStorage.getItem("Local_minute" + "6" + sel) > window.localStorage.getItem("Local_minute" + "6" + del)) {
                                swap = 1;

                                temp = window.localStorage.getItem("Local_day" + "6" + sel);
                                temp1 = window.localStorage.getItem("Local_day" + "6" + del);

                                window.localStorage.setItem("Local_day" + "6" + sel, temp1);
                                window.localStorage.setItem("Local_day" + "6" + del, temp);


                                //change hours
                                temp = window.localStorage.getItem("Local_hour" + "6" + sel);
                                temp1 = window.localStorage.getItem("Local_hour" + "6" + del);

                                window.localStorage.setItem("Local_hour" + "6" + sel, temp1);
                                window.localStorage.setItem("Local_hour" + "6" + del, temp);

                                //change minutes
                                temp = window.localStorage.getItem("Local_minute" + "6" + sel);
                                temp1 = window.localStorage.getItem("Local_minute" + "6" + del);

                                window.localStorage.setItem("Local_minute" + "6" + sel, temp1);
                                window.localStorage.setItem("Local_minute" + "6" + del, temp);
                            }
                        }

                    }
                    sel++;
                }
            } while (swap == 1);
            //End of sorting

        }
  
        window.localStorage.setItem('tabe', '1');
        if (index == 0)
        {
           /* for (i = 0; i < 10; i++)
            {
                if(window.localStorage.getItem("Local_day" + "0" + i)!==null)
                {


                }

            }will add this once I sort out a sorting algorithm, then I can remove empty rows once emptiness is detected*/

            window.localStorage.setItem('ro1', '1');
        }
        else if (index == 1) {
            window.localStorage.setItem('ro2', '1');
        }
        else if (index == 2) {
            window.localStorage.setItem('ro3', '1');
        }
        else if (index == 3) {
            window.localStorage.setItem('ro4', '1');
        }
        else if (index == 4) {
            window.localStorage.setItem('ro5', '1');
        }
        else if (index == 5) {
            window.localStorage.setItem('ro6', '1');
        }
        else if (index == 6) {
            window.localStorage.setItem('ro7', '1');
        }
        else if (index == 7) {
            window.localStorage.setItem('ro8', '1');
        }
        else if (index == 8) {
            window.localStorage.setItem('ro9', '1');
        }
        else if (index == 9) {
            window.localStorage.setItem('ro10', '1');
        }
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
        var sel = 0;
        var temp;
        

        var table = document.getElementById("schedule_table");
        if (window.localStorage.getItem('ro1') == '1') {
            var row1 = table.insertRow(1);
            var cell1 = [row1.insertCell(0), row1.insertCell(1), row1.insertCell(2), row1.insertCell(3), row1.insertCell(4), row1.insertCell(5), row1.insertCell(6)];
            row1.className = "danger";

        }
        if (window.localStorage.getItem('ro2') == '1') {
            var row2 = table.insertRow(2);
            var cell2 = [row2.insertCell(0), row2.insertCell(1), row2.insertCell(2), row2.insertCell(3), row2.insertCell(4), row2.insertCell(5), row2.insertCell(6)];
            row2.className = "warning";


        }
        if (window.localStorage.getItem('ro3') == '1') {
            var row3 = table.insertRow(3);
            var cell3 = [row3.insertCell(0), row3.insertCell(1), row3.insertCell(2), row3.insertCell(3), row3.insertCell(4), row3.insertCell(5), row3.insertCell(6)];
            row3.className = "success";


        }
        if (window.localStorage.getItem('ro4') == '1') {
            var row4 = table.insertRow(4);
            var cell4 = [row4.insertCell(0), row4.insertCell(1), row4.insertCell(2), row4.insertCell(3), row4.insertCell(4), row4.insertCell(5), row4.insertCell(6)];
            row4.className = "danger";


        }
        if (window.localStorage.getItem('ro5') == '1') {
            var row5 = table.insertRow(5);
            var cell5 = [row5.insertCell(0), row5.insertCell(1), row5.insertCell(2), row5.insertCell(3), row5.insertCell(4), row5.insertCell(5), row5.insertCell(6)];
            row5.className = "warning";
        }
        if (window.localStorage.getItem('ro6') == '1') {
            var row6 = table.insertRow(6);
            var cell6 = [row6.insertCell(0), row6.insertCell(1), row6.insertCell(2), row6.insertCell(3), row6.insertCell(4), row6.insertCell(5), row6.insertCell(6)];
            row6.className = "success";
        }
        if (window.localStorage.getItem('ro7') == '1') {
            var row7 = table.insertRow(7);
            var cell7 = [row7.insertCell(0), row7.insertCell(1), row7.insertCell(2), row7.insertCell(3), row7.insertCell(4), row7.insertCell(5), row7.insertCell(6)];
            row7.className = "danger";

        }
        if (window.localStorage.getItem('ro8') == '1') {
            var row8 = table.insertRow(8);
            var cell8 = [row8.insertCell(0), row8.insertCell(1), row8.insertCell(2), row8.insertCell(3), row8.insertCell(4), row8.insertCell(5), row8.insertCell(6)];
            row8.className = "warning";
        }
        if (window.localStorage.getItem('ro9') == '1') {
            var row9 = table.insertRow(9);
            var cell9 = [row9.insertCell(0), row9.insertCell(1), row9.insertCell(2), row9.insertCell(3), row9.insertCell(4), row9.insertCell(5), row9.insertCell(6)];
            row9.className = "success";
        }
        if (window.localStorage.getItem('ro10') == '1') {
            var row10 = table.insertRow(10);
            var cell10 = [row10.insertCell(0), row10.insertCell(1), row10.insertCell(2), row10.insertCell(3), row10.insertCell(4), row10.insertCell(5), row10.insertCell(6)];
            row10.className = "danger";

        }

        /*var row = [table.insertRow[0], table.insertRow[1], table.insertRow[2], table.insertRow[3], table.insertRow[4], table.insertRow[5], table.insertRow[6], table.insertRow[7], table.insertRow[8], table.insertRow[9]];
        var cell = [[row[0].insertCell(0), row[0].insertCell(1), row[0].insertCell(2), row[0].insertCell(3), row[0].insertCell(4), row[0].insertCell(5), row[0].insertCell(6)], [row[1].insertCell(0), row[1].insertCell(1), row[1].insertCell(2), row[1].insertCell(3), row[1].insertCell(4), row[1].insertCell(5), row[1].insertCell(6)], [row[2].insertCell(0), row[2].insertCell(1), row[2].insertCell(2), row[2].insertCell(3), row[2].insertCell(4), row[2].insertCell(5), row[2].insertCell(6)], [row[3].insertCell(0), row[3].insertCell(1), row[3].insertCell(2), row[3].insertCell(3), row[3].insertCell(4), row[3].insertCell(5), row[3].insertCell(6)], [row[4].insertCell(0), row[4].insertCell(1), row[4].insertCell(2), row[4].insertCell(3), row[4].insertCell(4), row[4].insertCell(5), row[4].insertCell(6)], [row[4].insertCell(0), row[4].insertCell(1), row[4].insertCell(2), row[4].insertCell(3), row[4].insertCell(4), row[4].insertCell(5), row[4].insertCell(6)], [row[5].insertCell(0), row[5].insertCell(1), row[5].insertCell(2), row[5].insertCell(3), row[5].insertCell(4), row[5].insertCell(5), row[5].insertCell(6)], [row[6].insertCell(0), row[6].insertCell(1), row[6].insertCell(2), row[6].insertCell(3), row[6].insertCell(4), row[6].insertCell(5), row[6].insertCell(6)], [row[7].insertCell(0), row[7].insertCell(1), row[7].insertCell(2), row[7].insertCell(3), row[7].insertCell(4), row[7].insertCell(5), row[7].insertCell(6)], [row[8].insertCell(0), row[8].insertCell(1), row[8].insertCell(2), row[8].insertCell(3), row[8].insertCell(4), row[8].insertCell(5), row[8].insertCell(6)], [row[9].insertCell(0), row[9].insertCell(1), row[9].insertCell(2), row[9].insertCell(3), row[9].insertCell(4), row[9].insertCell(5), row[9].insertCell(6)]];
        */
        
        for (i = 0; i < 7; i++)
        {
            
      
            if (window.localStorage.getItem("Local_day" + i + "0") === null)
            {
                //cell1[i].innerHTML = "";
            }
           
            else
            {

                

                cell1[i].innerHTML = '<center><a href="#" role="button" data-target=".cell_modal" data-toggle="collapse" aria-expanded="false">' + window.localStorage.getItem("Local_day" + i + "0") + '<br />' + window.localStorage.getItem("Local_hour" + i + "0") + ':' + window.localStorage.getItem("Local_minute" + i + "0") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "1") === null) {
                //cell2[i].innerHTML = "";
            }

            else {
                

            cell2[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "1") + '<br />' + window.localStorage.getItem("Local_hour" + i + "1") + ':' + window.localStorage.getItem("Local_minute" + i + "1") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "2") === null) {
                //cell3[i].innerHTML = "";
            }
            else {
                

                cell3[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "2") + '<br />' + window.localStorage.getItem("Local_hour" + i + "2") + ':' + window.localStorage.getItem("Local_minute" + i + "2") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "3") === null) {
                //cell4[i].innerHTML = "";
            }
            else {

                

                cell4[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "3") + '<br />' + window.localStorage.getItem("Local_hour" + i + "3") + ':' + window.localStorage.getItem("Local_minute" + i + "3") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "4") === null) {
                //cell5[i].innerHTML = "";
            }
            else {
                

                cell5[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "4") + '<br />' + window.localStorage.getItem("Local_hour" + i + "4") + ':' + window.localStorage.getItem("Local_minute" + i + "4") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "5") === null) {
                //cell6[i].innerHTML = "";
            }
            else {
                

                cell6[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "5") + '<br />' + window.localStorage.getItem("Local_hour" + i + "5") + ':' + window.localStorage.getItem("Local_minute" + i + "5") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "6") === null) {
                //cell7[i].innerHTML = "";
            }
            else {
                

                cell7[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "6") + '<br />' + window.localStorage.getItem("Local_hour" + i + "6") + ':' + window.localStorage.getItem("Local_minute" + i + "6") + '</a></center>';;
            }
            if (window.localStorage.getItem("Local_day" + i + "7") === null) {
              //  cell8[i].innerHTML = "";
            }
            else {
                

                cell8[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "7") + '<br />' + window.localStorage.getItem("Local_hour" + i + "7") + ':' + window.localStorage.getItem("Local_minute" + i + "7") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "8") === null) {
                //cell9[i].innerHTML = "";
            }
            else {
                

                cell9[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "8") + '<br />' + window.localStorage.getItem("Local_hour" + i + "8") + ':' + window.localStorage.getItem("Local_minute" + i + "8") + '</a></center>';
            }
            if (window.localStorage.getItem("Local_day" + i + "9") === null) {
                //cell10[i].innerHTML = "";
            }
            else {
                

                cell10[i].innerHTML = '<center><a href="#">' + window.localStorage.getItem("Local_day" + i + "9") + '<br />' + window.localStorage.getItem("Local_hour" + i + "9") + ':' + window.localStorage.getItem("Local_minute" + i + "9") + '</a></center>';
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

