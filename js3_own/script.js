let boxes=document.querySelectorAll(".box");
let mesg=document.querySelector(".msg-cont");
let reset=document.querySelector(".reset");
let newbtn=document.querySelector("#new-btn");
let mg=document.querySelector("#msg");
let turno=true;
win=[[0,1,2,],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
let count=0;
boxes.forEach((box) => {
   
    box.addEventListener("click",()=>{
        count++;
       if(turno){
        box.innerText="X";
        turno=false;
       }
       else{
        box.innerText="O";
        turno=true;
       }
       box.disabled=true;
       checkwin(count);
       
    });
});

reset.addEventListener("click",()=>{
    for(let p of boxes){
        p.innerText="";
        p.disabled=false;
       }
    count=0;
    turno=true;
})
const newfn=()=>{
newbtn.addEventListener("click",()=>{
    mesg.classList.add("hide");
   for(let p of boxes){
    p.innerText="";
    p.disabled=false;
   }
   turno=true;
   count=0;
});
};
const dispmsg=(val1)=>{
    mg.innerText=`Congratulations!! Winner is ${val1}`;
    mesg.classList.remove("hide");
    newfn();
 };
const checkwin=(count)=>{
    let flag=0;
    for(let b of win){
        let val1=boxes[b[0]].innerText;
        let val2=boxes[b[1]].innerText;
        let val3=boxes[b[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                flag=1;
                console.log(`Winner is ${val1}`);
                dispmsg(val1);
            }
        }
        
        if(count==9 && flag===0){
            alert("Hey all boxes are filled!! Kindly please reset the game to play.");
        }
    }
    
};


