var myVar;
var qcount=1;
var Score=0;
var attempted=new Array(11);

/*------------------------------------------------------------------------------*/
const arr={

  1:"1. What is the HTML tag under which one can write the JavaScript code?",
  2:"2.  Which is not a JavaScript Data types: ",
  3:"3. Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
  4:"4. What is the correct syntax for referring to an external script called “geek.js”?",
  5:"5. The external JavaScript file must contain <script> tag. True or False?",
  6:"6. Which of the following is not a reserved word in JavaScript?",
  7:"7. What is used to check if the number is an integer or not?",
  8:"8. Which of the following is an advantage of using JavaScript?",
  9:"9. JavaScript is a ________ Side Scripting Language.",
  10:"10. Which function of an Array object calls a function for each element in the array?"
};
const answers={

  1:{
    1:"javascript",
    2:"scripted",
    3:"script",
    4:"js",
    5:"3"
  },
  2:{
    1:"Object",
    2:"String",
    3:"Integer",
    4:"undefined",
    5:"3"
  },
  3:{
    1:"alertbox(“GeeksforGeeks”)",
    2:"msg(“GeeksforGeeks”)",
    3:"msgbox(“GeeksforGeeks”)",
    4:"alert(“GeeksforGeeks”)",
    5:"2"
  },
  4:{
  1:" script src=”geek.js” ",
  2: " script href=”geek.js” ",
  3: " script ref=”geek.js” ",
  4: " script name=”geek.js” ",
  5:"1"
},
  5:{
    1: "true",
    2: "false",
    3: "-1",
    4: "-1",
    5: "2"
  },
  6:{
    1:"interface",
    2:" throws",
    3: "program",
    4: "short",
    5:"3"
  },
  7:{
    1: "Integer(value)",
    2: "ifInteger(value)",
    3: "isInteger(value)",
    4:" ifinteger(value)",
    5:"3"
  },
  8:{
    1:"Increased interactivity",
    2:"Less server interaction",
    3: "Immediate feedback from the users",
    4: "All of the above",
    5:"4"
  },
  9:{
    1:" Server",
    2:" ISP",
    3: "Browser",
    4: "None of the above",
    5:"3"
  },
  10:{
    1:" forEach()",
    2: "every()",
    3: "forEvery()",
    4:" each()",
    5:"1"
  }
}
function myFunction(){

  var count=15;
//  let cond=true;
  myVar=setInterval(function(){
let obj=document.getElementById("dot");
obj.innerHTML=count;

if(count==0){
  StopFunction();
  ChangeQuestion();
}
count--;
}, 1000);
}

function start(){
  Score=0;
  qcount=1;
  unhide();
  displayAns(1);
  myFunction();
  hideQuestionPanel();
  initArray();
}

function initArray(){
  for(let i=1;i<11;i++){
    attempted[i]=0;
  }
}
function unhide(){
    document.getElementById("rightpanel").style.display="block";
  document.getElementById("timer").style.display="block";
  document.getElementById("bt1").style.display = "block";
  document.getElementById("bt2").style.display = "block";
  document.getElementById("bt3").style.display = "block";
  document.getElementById("bt4").style.display = "block";
  document.getElementById("questions").style.display="block";
  document.getElementById("start").style.display="none";
  document.getElementById("next").style.display="block";
  document.getElementById("Score").innerHTML="Keep Rocking!!";

  let temp=document.getElementById("questions");
  temp.innerHTML=arr[1];
}

function hide(){
  document.getElementById("bt1").style.display = "none";
  document.getElementById("bt2").style.display = "none";
  document.getElementById("bt3").style.display = "none";
  document.getElementById("bt4").style.display = "none";
  document.getElementById("questions").style.display="none";
  document.getElementById("timer").style.display="none";
  document.getElementById("start").style.display="block";
  document.getElementById("start").innerHTML="Attempt Again";
  document.getElementById("next").style.display="none";
}

function StopFunction() {
  console.log("stopped");
  clearTimeout(myVar);
}

function ChangeQuestion(){

    qcount++;
  if(qcount==11)
  {
      hide();
      showScore();
      StopFunction();
  }
  else{
    document.getElementById("bt3").style.display = "block";
    document.getElementById("bt4").style.display = "block";
    StopFunction();
    myFunction();
    console.log("question called");
    displayAns(qcount);
    let temp=document.getElementById("questions");
    temp.innerHTML=arr[qcount];
  }
}

function displayAns(ansNumber){
  console.log(ansNumber);
  let temp=answers[ansNumber];
  console.log(temp);


  document.getElementById("bt1").innerHTML=temp[1];
  document.getElementById("bt2").innerHTML=temp[2];

  if(temp[3]==-1)
  document.getElementById("bt3").style.display = "none";
  else
  document.getElementById("bt3").innerHTML=temp[3];

  if(temp[4]==-1)
  document.getElementById("bt4").style.display = "none";
  else
  document.getElementById("bt4").innerHTML=temp[4];
}

function Calc(UserInput){

  let myObj=answers[qcount];
  let ans=myObj[5];
  if(UserInput==ans){
    attempted[qcount]=1;
    document.getElementById(qcount).style.backgroundImage = "url('https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-128.png')";
    document.getElementById(qcount).style.visibility="visible";
    Score++;
  }
  else{
      attempted[qcount]=1;
      document.getElementById(qcount).style.backgroundImage="url('https://cdn1.iconfinder.com/data/icons/check-mark-7/512/g30896-512.png')";
      document.getElementById(qcount).style.visibility="visible";
  }

  ChangeQuestion();
}

function addQuestions(){
  var code = document.createElement('code');
  code.innerText = '<html></html>';
}

function showScore(){
  let obj=document.getElementById("Score");
  obj.innerText="Your Score is "+" " + Score*10 +"%";
  showUnAttempted();
  //obj.innerHTML="Your Score is 100%";
}
function showUnAttempted(){
  for(let i=1;i<11;i++)
    if(attempted[i]!=1){
      document.getElementById(i).style.backgroundImage="url('https://cdn.pixabay.com/photo/2014/10/29/10/39/exclamation-point-507768__340.png')";
      document.getElementById(i).style.visibility="visible";
  }
}

function hideQuestionPanel(){
  for(let i=1;i<11;i++){
      document.getElementById(i).style.visibility="hidden";
  }
}
