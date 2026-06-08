// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function(){
// alert("button is clicked");
// };
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayhello;
//     btn.onmouseenter=function(){
//         console.log("you entered a button")
//     }

//     console.dir(btn);

// }
let btns=document.querySelectorAll("button");
for(btn of btns){
// btn.addEventListener("click",sayhello);
btn.addEventListener("dblclick",sayName);{
    console.log("you have double clicked");
}
}

function sayhello(){
    alert("hello");
}
function sayName(){
    alert("hii");
}


// event listener
