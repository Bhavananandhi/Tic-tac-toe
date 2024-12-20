/*let old=document.getElementsByTagName("h2")[0];
old.innerText=old.innerText+"from apna college";
//old.innerText="Hello Javascript from apne college";
let divv=document.querySelectorAll(".divc");
console.dir(divv);
let idx=1;
for(i of divv){
    i.innerText=`new ${idx}`;
    idx++;
}
    


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyfirstJS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="divc">
        <h2>Hello Javascript</h2>
    </div>
    
    <div class="divc">
        <h1 class="aya">Swagatham</h1>
        <h1 class="aya">welcome</h1>
        <h1 class="aya">Swagath</h1>
        <p>ela unnaru andharu . All the best for ur future</p>
    </div>

    <div class="divc">
        <p>sare bye. Malli kaluddham</p>
    </div>
    <script src="script.js"></script>
    <button>Submit</button>
</body>
</html>




<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Random color example — event handler attribute</title>
    <style>
      button {
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <button>Change color</button>
    <script>
      const btn = document.querySelector('button');

      
      btn.addEventListener("focus", (event) => {
        const rndCol = "blue";
        event.target.style.background= rndCol;
      });
      btn.addEventListener("blur", (event) => {
      
        event.target.style.background= "";
      });
    </script>
  </body>
</html>
*/
let boxes=document.getElementsByClassName("pic1");
for(box of boxes){
box.addEventListener("mouseover",(event)=>{
  event.target.style.backgroundColor="yellow";

});
box.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor="";
   
  });
}