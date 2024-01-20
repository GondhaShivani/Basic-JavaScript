//addclass
document.getElementById("header").addEventListener("click",abc);

function abc(){
    document.getElementById("header").classList.add("xyz");

    var element1 = document.getElementById("header").classList;

    console.log(element1);
}


//removeclass
document.getElementById("header").addEventListener("click",abc);

function abc(){
    document.getElementById("header").classList.remove("efg");

    var element2 = document.getElementById("header").classList;

    console.log(element2);
}
