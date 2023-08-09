var tiim ;
var tin ;
var dey = function swwww(){
    // document.getElementById('weew').style.display = "none"
    // console.log(ques3)
    // document.getElementById("woti").style.display = "block"
    
    document.getElementById("woti").innerHTML = "You scored " + ques3 + " / 10"
    document.getElementById("tpp").style.display = "block"
    document.getElementById("weew").style.display = "none"
    // document.querySelector('#weew').style.display = "none"
    // document.getElementById("woti").style.display = "block"
}

function start(){
    document.getElementById('wq').innerHTML =60
    document.getElementById("mpp").style.display = "none"
    
    
    tiim = setInterval(function(){document.getElementById('ww').innerHTML = document.getElementById('ww').innerHTML -1;

        if(document.getElementById('ww').innerHTML == -1){
            clearInterval(tiim)
            alert("Your time is up")
            document.getElementById("koko").style.display = "none"
            document.getElementById("lolo").style.display = "none"
            document.getElementById("ret").style.display = "none"
            document.getElementById("ccc").style.display = "none"
            document.getElementById("hol").style.display = "none"
            document.getElementById("ggg").style.display = "none"
            document.getElementById("frrr").style.display = "none"
            document.getElementById("weq").style.display = "none"
            document.getElementById("wee").style.display = "none"
            document.getElementById("bhb").style.display = "none"
            document.getElementById('ww').innerHTML = 0
            clearInterval(tiim)
            
            
                
            
        }
    },60000)
    tin = setInterval(function(){document.getElementById('wq').innerHTML = document.getElementById('wq').innerHTML -1;

        if(document.getElementById('wq').innerHTML == 0){
            
            document.getElementById('wq').innerHTML =60
            clearInterval(tin)

            
            
        }
        if(document.getElementById('ww').innerHTML == -1){
    
            clearInterval(tin)
            document.getElementById('ww').innerHTML = 60
            clearInterval(tin)
            clearInterval(tin)
        
        
            
        }
    },1000)
    document.getElementById("koko").style.display = 'none'
    document.getElementById("pop").style.display = "block"
    document.getElementById("weew").style.display = "none"
    
    // document.getElementById("mom").style.display = "none"
}
// var number = 0
// parseInt(number)
// function slect(){
//     // number = number + 1
//     // number = parseInt(number) + 1
//     document.createElement("p").innerHTML.appendChild(document.createElement("p").innerHTML + 1)
    
// }
// function slect(){
//     number = +0
// }

// var nor = document.createElement("p").innerHTML
// var gey = document.createTextNode(1)
// // nor.appendChild(gey)
// document.createElement("p").innerHTML.appendChild(document.createTextNode(1))
var ques3 = 0;

function two(){
    // if(ques3 => 1){
    //     ques3 = ques3
    // }
    // ques3 = parseInt(ques3) + 1
    // console.log(ques3)
    if(ques3 => 0){
        ques3 = parseInt(ques3) + 1
        // document.getElementById("aqq").style.backgroundColor = 'red'
        // document.getElementById("swu").innerHTML = "correct" 
    }
    
    // document.getElementById('aqq').style.backgroundColor = "white"

}
function one(){
    // ques3 = parseInt(ques3) + 0
    // console.log(ques3)
    if(ques3 <= 0){
        ques3 = parseInt(ques3) + 0
        // document.getElementById("swu").innerHTML = "wrong" 
        
    }
    else{
        ques3 = parseInt(ques3) + -1
    }
    
}
function swwww(){
    if (ques3 > 10 ){
        ques3 = 10
    }
    clearInterval(tiim)
    clearInterval(tin)
    console.log(ques3)
    document.getElementById("woti").innerHTML = "Hi " + document.getElementById("see").value + " " + "you scored "+ ques3 + " / 10"
    
    document.getElementById("pop").style.display = "none"
    document.getElementById("lolo").style.display = "none"
    document.getElementById("ret").style.display = "none"
    document.getElementById("ccc").style.display = "none"
    document.getElementById("wee").style.display = "none"
    document.getElementById("hol").style.display = "none"
    document.getElementById("ggg").style.display = "none"
    document.getElementById("frrr").style.display = "none"
    document.getElementById("weq").style.display = "none"
    
    document.getElementById("bhb").style.display = "none"
    document.getElementById("woti").innerHTML = "Hi " + document.getElementById("see").value + " " + "you scored "+ ques3 + " / 10";
    document.getElementById("tpp").style.display = "block"
    document.getElementById("weew").style.display = "none"
}
// mm
var ques3 = 0;

function twwo(){
    ques3 = parseInt(ques3) + 1
    console.log(ques3)
    if(ques3 => 1){
        ques3 = ques3
        // document.getElementById("swuu").innerHTML = "correct" 
    }


}
function oone(){
    ques3 = parseInt(ques3) + 0
    console.log(ques3)
    if(ques3 <= 1){
        ques3 = parseInt(ques3) + 0

        // document.getElementById("swuu").innerHTML = "wrong" 
    }
    else{
        ques3 = parseInt(ques3) + -1
    }

}
// kkk
var ques3 = 0;

function twowo(){
    ques3 = parseInt(ques3) + 1
    console.log(ques3)
    if(ques3 => 1){
        ques3 = ques3
        // document.getElementById("swuu").innerHTML = "correct" 
    }

}
function oowne(){
    ques3 = parseInt(ques3) + 0
    console.log(ques3)
    if(ques3 <= 0){
        // document.getElementById("swuu").innerHTML = "wrong" 
    }

}

// sfghjkhgf

var ques3 = 0;

function twwo(){
    ques3 = parseInt(ques3) + 1
    console.log(ques3)
    if(ques3 => 1){
        ques3 = ques3
        // document.getElementById("seeq").innerHTML = "correct" 
    }

}
function oone(){
    ques3 = parseInt(ques3) + 0
    console.log(ques3)
    if(ques3 <= 0){
        // document.getElementById("seeq").innerHTML = "wrong" 
    }

}
// ghjk


var ques3 = 0;

function twwo(){
    ques3 = parseInt(ques3) + 1
    console.log(ques3)
    if(ques3 => 1){
        ques3 = ques3
        // document.getElementById("swuu").innerHTML = "correct" 
    }

}
function oone(){
    ques3 = parseInt(ques3) + 0
    console.log(ques3)
    if(ques3 <= 0){
        // document.getElementById("swuu").innerHTML = "wrong" 
    }

}
function dtt(){
    document.getElementById("pop").style.display = "none"
    document.getElementById("lolo").style.display = "block"
    document.getElementById("weew").style.display = "block"

    if(ques3 > 1){
        ques3 = 1
    }
    else{
        ques3 = q
    }
}
function dttt(){
    document.getElementById("pop").style.display = "block"
    document.getElementById("lolo").style.display = "none"

}
function dot(){
    document.getElementById("ret").style.display = "block"
    document.getElementById("lolo").style.display = "none"

    if(ques3 > 2){
        ques3 = 2
    }
    else{
        ques3 = ques3
    }
}
function dott(){
    document.getElementById("ret").style.display = "none"
    document.getElementById("lolo").style.display = "block"
}
function doot(){
    document.getElementById("ccc").style.display = "block"
    document.getElementById("ret").style.display = "none"
    if(ques3 > 3){
        ques3 = 3
    }
    else{
        ques3 = ques3
    }
}
function dtto(){
    document.getElementById("ccc").style.display = "none"
    document.getElementById("ret").style.display = "block"
}
function ctto(){
    document.getElementById("wee").style.display = "block"
    document.getElementById("ccc").style.display = "none"
    if(ques3 > 4){
        ques3 = 4
    }
    else{
        ques3 = ques3
    }
}
function coot(){
    document.getElementById("wee").style.display = "none"
    document.getElementById("ccc").style.display = "block"
}
function coott(){
    document.getElementById("wee").style.display = "none"
    document.getElementById("hol").style.display = "block"
    if(ques3 > 5){
        ques3 = 5
    }
    else{
        ques3 = ques3
    }
}
function just(){
    document.getElementById("hol").style.display = "none"
    document.getElementById("wee").style.display = "block"
}
function jdtt(){
    document.getElementById("hol").style.display = "none"
    document.getElementById("ggg").style.display = "block"

    if(ques3 > 6){
        ques3 = 6
    }
    else{
        ques3 = ques3
    }}
function dtott(){
    document.getElementById("ggg").style.display = "none"
    document.getElementById("hol").style.display = "block"
}
function ddvtt(){
    document.getElementById("ggg").style.display = "none"
    document.getElementById("frrr").style.display = "block"
    if(ques3 > 7){
        ques3 = 7
    }
    else{
        ques3 = ques3
    }
}
function dttoot(){
    document.getElementById("frrr").style.display = "none"
    document.getElementById("ggg").style.display = "block"
}
function dctt(){
    document.getElementById("frrr").style.display = "none"
    document.getElementById("weq").style.display = "block"
    if(ques3 > 8){
        ques3 = 8
    }
    else{
        ques3 = ques3
    }
}
function dcwtt(){
    document.getElementById("weq").style.display = "none"
    document.getElementById("frrr").style.display = "block"
}
function dttp(){
    document.getElementById("weq").style.display = "none"
    document.getElementById("bhb").style.display = "block"
    document.getElementById("weew").style.display = "block"
    if(ques3 > 9){
        ques3 = 9
    }
    else{
        ques3 = ques3
    }}
function dtptt(){
    document.getElementById("bhb").style.display = "none"
    document.getElementById("weq").style.display = "block"
}
// function quiz(){
    
//     // document.getElementsById("koko").style.display = "none"
//     document.getElementById("pop").style.display = "block"
//     document.getElementById("weew").style.display = "none"
// }

function quiz(){
    
    tiim = setInterval(function(){document.getElementById('ww').innerHTML = document.getElementById('ww').innerHTML -1;

        if(document.getElementById('ww').innerHTML == -1){
            clearInterval(tiim)
            alert("Your time is up")
            document.getElementById("koko").style.display = "none"
            document.getElementById("lolo").style.display = "none"
            document.getElementById("ret").style.display = "none"
            document.getElementById("ccc").style.display = "none"
            document.getElementById("hol").style.display = "none"
            document.getElementById("ggg").style.display = "none"
            document.getElementById("frrr").style.display = "none"
            document.getElementById("weq").style.display = "none"
            document.getElementById("wee").style.display = "none"
            document.getElementById("bhb").style.display = "none"
            document.getElementById('ww').innerHTML = 0
            clearInterval(tiim)
            
            
                
            
        }
    },60000)
    tin = setInterval(function(){document.getElementById('wq').innerHTML = document.getElementById('wq').innerHTML -1;

        if(document.getElementById('wq').innerHTML == 0){
            
            document.getElementById('wq').innerHTML =60
            clearInterval(tin)

            
            
        }
        if(document.getElementById('ww').innerHTML == -1){
    
            clearInterval(tin)
            document.getElementById('ww').innerHTML = 60
            clearInterval(tin)
            clearInterval(tin)
        
        
            
        }
    },1000)
    document.getElementById("koko").style.display = 'none'
    document.getElementById("pop").style.display = "block"
    document.getElementById("weew").style.display = "block"
    
}
function aaaa(){

    // document.getElementById("mom").style.display = "block"
    // document.getElementById("mmm").style.display = "none"
    if(document.getElementById('see'&&'ser').value == ""){
        alert('input your name')
    }
    else{
        document.getElementById("mom").style.display = "block"
        document.getElementById("mmm").style.display = "none"
        document.getElementById("tpp").style.display = 'none'
        document.getElementById("koko").style.display = "block"
    document.getElementById("woti").style.display = "block"
    }
    document.getElementById("popo").innerHTML = 'Welcome ' + document.getElementById('see').value + ' ' + '----- '+ " " +' '    +'matric no: '  + document.getElementById('ser').value
    document.getElementById("weew").style.display = "none"
    document.getElementById("koko").style.display = "block"
    // document.getElementById("woti").style.display = "none"
}
function end(){
    window.location.reload()

        document.getElementById("mom").style.display = "none"
        document.getElementById("mmm").style.display = "block"
        // document.getElementById("").style.display = "block"
    
}



