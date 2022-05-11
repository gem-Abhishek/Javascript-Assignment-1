(() => {

    document.body.style.backgroundColor="#ADFF2F"
    document.body.style.color="#989898"

    var div = document.createElement("div");
    div.id='container'
    document.body.appendChild(div);

    var heading = document.createElement('h1')
    heading.id = 'heading'
    heading.innerHTML="<h1>Table Data</h1><br>"
    div.appendChild(heading);
    
    var tbl = document.createElement("table");
    tbl.id = 'table'

    var tblhead = document.createElement("thead")
    var tblbody = document.createElement("tbody")
    
    const arr = ["Name", "Age", "DOB", "Email", "Company"];

    const data_user1={"Name":"Abhishek Garg", "Age":"19", "DOB":"09 Sep 2002", "Email":"abhishekgarg@gmail.com", "Company":"Gemini Solutions Pvt. Ltd."}
    const data_user2={"Name":"Tushar Rane", "Age":"20", "DOB":"11 Aug 2001", "Email":"tusharrane@geminisolutions.com", "Company":"Gemini Solutions Pvt. Ltd."}
    const data_user3={"Name":"Prabal Kumar", "Age":"21", "DOB":"28 Oct 2000", "Email":"prabalkumar@geminisolutions.com", "Company":"Gemini Solutions Pvt. Ltd."}
    const data_user4={"Name":"Jungindar Pal", "Age":"21", "DOB":"27 Nov 2000", "Email":"jugindarpal@geminisolutions.com", "Company":"Gemini Solutions Pvt. Ltd."}
    const data_user5={"Name":"Priya Tomar", "Age":"21", "DOB":"11 Dec 2000", "Email":"priyatomar@geminisolutions.com", "Company":"Gemini Solutions Pvt. Ltd."}

    const data_arr=[data_user1,data_user2,data_user3,data_user4,data_user5];

    for (var i = 0; i < 5; i++) {

        var col_head = document.createElement("th");
        var head_text= document.createTextNode(arr[i]);
        col_head.appendChild(head_text)
        tblhead.appendChild(col_head);

        var row = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            var cell = document.createElement('td');
            var celltext= document.createTextNode(data_arr[i][arr[j]]);
            cell.appendChild(celltext)
            row.appendChild(cell);
        }
        tblbody.appendChild(row);
    }
    tbl.appendChild(tblhead);
    tbl.appendChild(tblbody);

    tbl.setAttribute("border","1");
    tbl.setAttribute("cellpadding","10")
    tbl.setAttribute("cellspacing","0")

    div.appendChild(tbl);


  })()