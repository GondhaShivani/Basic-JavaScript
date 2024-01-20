//-------------------onclick
document.getElementById("header").onclick = func;
function func(){
    document.getElementById("header").style.backgroundColor = "darkcyan";
}


//----------------------------------------------------------------------------addEventListener
/* document.getElementById("content").addEventListener("click",function(){
    document.getElementById("content").style.border = "2px solid blue";
}); */
//                  OR
document.getElementById("content").addEventListener("mouseenter",function(){
   this.style.border = "3px solid blue";
});


//----------------------------------------------------------------------------addEventListener
document.getElementById("content").addEventListener('mouseleave',abc);

function abc(){
    document.getElementById("content").style.border = "3px solid deeppink";
}


//-------------------------------------------------------------------------removeEventListener
document.getElementById("content").removeEventListener('mouseleave', xyz);

function xyz(){
    document.getElementById("content").removeEventListener('mouseleave',abc);
}


