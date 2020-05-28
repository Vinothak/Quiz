<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Its Quiz Time</title>
  <link rel="stylesheet" type="text/css" href="mystyle.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  </head>
  <body>
    <div id="rightpanel" style="display:none" class="sidebar">

       <div class="panel">
          <h2 class="header">Questions Panel</h1>
            <div class="panelbox">
        <div class="row">
             <span id="1" class="toprow"></span>
            <span id="2" class="toprow"></span>
              <span id="3" class="toprow"></span>
                <span id="4" class="toprow"></span>
                  <span id="5" class="toprow"></span>
        </div>
        <div class="row">
          <span id="6" class="toprow"></span>
            <span id="7" class="toprow"></span>
              <span id="8" class="toprow"></span>
                <span id="9" class="toprow"></span>
                  <span id="10" class="toprow"></span>
        </div>
</div>
</div>
</div>
  <div id="outer">

    <p id="timer" style="display:none">
     <span id="dot">0</span>
     </p>
    <p><h1 id="Score" class="header" style="text-align:center" >Ready For The Quiz</h1></p>

  <div id="question">
  <p  id="questions" style="display:none; font-size:20px" class="monospace"></p>
  </div>

  <div>
  <button style="display:none" type="button" onclick="Calc(1)" id="bt1"  class="btn btn-primary btn-lg btn-block"></button>
  </div>
    <div>
  <button style="display:none" type="button" onclick="Calc(2)" id="bt2"  class="btn btn-primary btn-lg btn-block"></button>
</div>
<div>
  <button style="display:none" type="button" onclick="Calc(3)" id="bt3" class="btn btn-primary btn-lg btn-block" ></button>
  </div>
  <div>
  <button style="display:none" type="button" onclick="Calc(4)" id="bt4" class="btn btn-primary btn-lg btn-block"></button>
    </div>
   </div>

   <div class="footer">
     <button id="next" style="display:none" type="button" onclick="ChangeQuestion()" class="btn btn-primary btn-lg center-block">Next</button>
     <button id="start" type="button" style="display:block" onclick="start(1)" class="btn btn-primary btn-lg center-block">Start</button>
   </div>


    <script src="main.js" charset="utf-8"></script>
  </body>
</html>
