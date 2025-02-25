




//function CheckBoxCheck1(rb) {
////    var gv = document.getElementById("<%=GridView1.ClientID>%");
////    var row = rb.parentNode.parentNode;
////    var rbs = row.getElementsByTagName("input");
////    for (var i = 0; i < rbs.length; i++) {
////        if (rbs[i].type == "checkbox") {
////            alert("lol");
////            }
//    //        }


//    var gv = document.getElementById("<%=GridView2.ClientID %>");
//    for (i = 1; i < gv.rows.length; i++) {

//        if (gv.rows[i].cells[3].getElementsByTagName("INPUT")[0].checked) {
//            gv.rows[i].cells[4].getElementsByTagName("INPUT")[0].checked = false;
//        } else { gv.rows[i].cells[4].getElementsByTagName("INPUT")[0].checked = true; }

//    }
//    }



    function CheckBoxCheck(rb) {
        var gv = document.getElementById("<%=GridView2.ClientID>%");
        var row = rb.parentNode.parentNode;
        var rbs = row.getElementsByTagName("input");
        for (var i = 0; i < rbs.length; i++) {
            if (rbs[i].type == "checkbox") {
                rbs[i].checked = true;
                if (rbs[i].checked && rbs[i] != rb) {
                    rbs[i].checked = false;



                }


            }

        }
    }