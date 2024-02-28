let btn = document.getElementById("btn");
let name = document.getElementsByClassName("input");
let empty = document.getElementsByClassName("empty");

btn.addEventListener("click", submit);
flag = 0;
console.log("This is contact page");

function submit() {
    if (name[0].value == "") {
         empty[0].style.display = "block";
         flag = 1;
    }else{
        empty[0].style.display = "none";
    }
    if (name[1].value == "") {
        empty[1].style.display = "block";
        flag = 1;
   }else{
        empty[1].style.display = "none";
    }
   if (name[2].value == "") {
        empty[2].style.display = "block";
        flag = 1;
    }else{
        empty[2].style.display = "none";
    }
    if (name[3].value == "") {
        empty[3].style.display = "block";
        flag = 1;
    }else{
        empty[3].style.display = "none";
    }
    if (name[4].value == "") {
        empty[4].style.display = "block";
        flag = 1;
   }else{
    empty[4].style.display = "none";
    }
}