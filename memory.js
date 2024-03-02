
function save(){
    let question =document.getElementById("question").value
    if(question){
            //this is for my desire to Reih
            // was to fuccking heart but i did't 10/18/22 in college

        
        document.getElementById("answerT").style.opacity='1'
        
        

        
        
    }else {
        alert("please inter your question!!!")
    }

    
}

var arry = [];
let answer;

function remmber(){

    let dic = {}
    answer =  document.getElementById("answer").value
    question = document.getElementById("question").value
    dic['question'] = question;
    dic['answer'] = answer;
    arry.push(dic)

    
    console.log(arry)

    show()

    document.getElementById("question").value = ""
    document.getElementById("answer").value = ""
    setTimeout(document.getElementById("answerT").style.opacity='0'
    ,5000)
    
}






function show(){


    let qu = arry[arry.length-1].question
    let an = arry[arry.length-1].answer


    let p = document.createElement("h5")
    p.className = "card-title"
    p.textContent = qu + "?"
    let h = document.createElement("p")
    h.className = "card-text"
    h.textContent = "Your answer is here,Click to see that"
    let showb = document.createElement("button")
    showb.textContent = "Show"
    showb.className = "btn btn-primary"
    showb.type = "button"
    showb.id = "rotate"
    showb.onclick = function(){
        
        

        document.body.removeChild(div1)
        let div2 = document.createElement("div")
        let s = document.createElement("h5")
        s.innerHTML = "Your answer is : " + an
        let a = document.createElement("h8")
        a.innerHTML = "Question was :  "  + qu
        a.style.opacity = "0.6";
        div2.appendChild(s)
        div2.appendChild(a)
        div2.id = "Card2"
        div2.style = "width: 19 rem;"

        setTimeout(yes,500)

        document.body.appendChild(div2)

        function yes (){
        document.getElementById("Card2").style.opacity = "1";
        }


    }
    

    let butt2 = document.createElement("button")
    butt2.textContent = "Edit"
    butt2.className = "btn btn-secondary"
    butt2.type = "button"


    let butt3 = document.createElement("button")
    butt3.textContent = "Delete"
    butt3.className = "btn btn-danger"
    butt3.type = "button"
    butt3.onclick = function(){
        document.body.removeChild(div1)
    }


    let div = document.createElement("div")
    div.className = "card-body"
    div.appendChild(p)
    div.appendChild(h)
    div.appendChild(showb)
    div.appendChild(butt2)
    div.appendChild(butt3)
    let div1 = document.createElement("div")
    div1.id = "Card"
    div1.style = "width: 19 rem;"
    div1.appendChild(div)

    document.body.appendChild(div1)


    
    




}







