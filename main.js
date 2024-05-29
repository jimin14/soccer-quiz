document.getElementById("btn").addEventListener("click", BtnClicked);

function BtnClicked() {


 let answer1 = document.getElementById("answer1-in").value.toLowerCase();
 let answer2 = document.getElementById("answer2-in").value.toLowerCase();
 let answer3 = document.getElementById("answer3-in").value.toLowerCase();
 let answer4 = document.getElementById("answer4-in").value.toLowerCase();


 let numCorrect = 0;

if (answer1 == "10" ) {
 document.getElementById("output1").innerHTML ="correct";
 document.getElementById("answer1-in").style.border = "2px solid green";
 numCorrect++;
}else {
    document.getElementById("output1").innerHTML ="incorrect";
    document.getElementById("answer1-in").style.border = "2px solid red";
}

if (answer2 == "britain" ) {
    document.getElementById("output2").innerHTML ="correct";
    document.getElementById("answer2-in").style.border = "2px solid green";
    numCorrect++;
   }else {
       document.getElementById("output2").innerHTML ="incorrect";
       document.getElementById("answer2-in").style.border = "2px solid red";
   }


if (answer3 == "offside" ) {
    document.getElementById("output3").innerHTML ="correct";
    document.getElementById("answer3-in").style.border = "2px solid green";
    numCorrect++;
   }else {
       document.getElementById("output3").innerHTML ="incorrect";
       document.getElementById("answer3-in").style.border = "2px solid red";
   }


   if (answer4 == "penalty kick" ) {
    document.getElementById("output4").innerHTML ="correct";
    document.getElementById("answer4-in").style.border = "2px solid green";
    numCorrect++;
   }else {
       document.getElementById("output4").innerHTML ="incorrect";
       document.getElementById("answer4-in").style.border = "2px solid red";
   }

   if (numCorrect == 0){
    document.getElementById("score").innerHTML= " your score: 0 / 4 (0%) ";
     document.getElementById("output").innerHTML= "go study more";
} else if ( numCorrect == 1) {
    document.getElementById("score").innerHTML= "your score: 1 / 4 (25%)  ";
    document.getElementById("output").innerHTML= "need more study about socccer";
} else if (numCorrect == 2) {
    document.getElementById("score").innerHTML= "your score: 2 / 4 (50%)  ";
    document.getElementById("output").innerHTML= "not bad";
} else if (numCorrect == 3) {
    document.getElementById("score").innerHTML= "your score: 3 / 4 (75%)  ";
    document.getElementById("output").innerHTML= "good job";
}  else if (numCorrect == 4) {
    document.getElementById("score").innerHTML= "your score: 4 / 4 (100%)   ";
    document.getElementById("output").innerHTML= "GREAT!!!";
}  
}




   


