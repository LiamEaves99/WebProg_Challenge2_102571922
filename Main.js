function fun_Start() {

    var i;
    for (i = 0; i < int_Questions_Total; i++) {
        var nodeQ = document.createElement("H2");
        nodeQ.innerHTML = str_Questions[i]
        nodeQ.className = "cls_MR"
        var nodeD = document.createElement("DIV");
        nodeD.id = "div" + i.toString()
        nodeD.className = "cls_Q"
            
        document.getElementById("lbl_Main").appendChild(nodeD); 
        document.getElementById("div"+ i.toString()).appendChild(nodeQ);         
        var i2;
        for (i2 = 0; i2 < int_Answers_Total; i2++) {
            var nodeB = document.createElement("BUTTON");
            nodeB.id = "btn_Q" + i + "_A" + i2;
            nodeB.className = "cls_btn";
            nodeB.innerHTML = str_Answers[i][i2];
            nodeB.addEventListener("click", fun_Button_Click);
            document.getElementById("div"+ i.toString()).appendChild(nodeB); 
        }
    }
        var nodeB = document.createElement("BUTTON");
        nodeB.id = "btn_Submit";
        nodeB.className = "cls_btn";
        nodeB.innerHTML = "Submit";
        nodeB.addEventListener("click", fun_Submit);
        document.getElementById("lbl_Submit").appendChild(nodeB);
}

function fun_Button_Click() {
    test = this.id;
    var str_store = test;
    str_store = str_store.substring(5);
    var Question = parseInt(str_store.substring(0, str_store.length - 3));
    var str_store = test;
    var Answer = parseInt(str_store.substring(8)) + 1;
    int_Player_Answers[Question] = Answer;

    for (i = 0; i < int_Answers_Total; i++) {
        if (i != Answer - 1)
        {
            document.getElementById("btn_Q" + Question +"_A" + i).className = "Answered";
        }
        else
        {
            document.getElementById("btn_Q" + Question +"_A" + i).className = "cls_btn";
        }
    }
}
function fun_Submit() {
    for (i = 0; i < int_Questions_Total; i++) {
        bol_Complete = true
        if (int_Player_Answers[i] == 0) {
            bol_Complete = false;
        }
    }
    if (bol_Complete == true) {
        int_Answers_Right = 0;
        for (i = 0; i < int_Questions_Total; i++) {
            if (int_Player_Answers[i] == int_Answers[i]) {
                int_Answers_Right += 1;
            }
        }
        alert("You got " + int_Answers_Right.toString() + " out of " + int_Questions_Total.toString() + " Questions right.");
    }
}