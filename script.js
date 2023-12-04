const btn=document.querySelector("button");
const body=document.querySelector("body");
const color=['yellow' , 'pink' , 'blue' , 'red' , 'white' , 'black' , 'green' , 'orange' , 'violet' , 'purple'];

body.style.backgroundColor="aqua";
btn.addEventListener("click",changeColor);

function changeColor()
{
    let i=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[i];

}