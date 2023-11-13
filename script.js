const buttons = document.querySelectorAll(".color");

buttons.forEach( button => button.addEventListener("click", function(event){
      // alert(event.target.id);
      document.body.style.backgroundColor = event.target.id;
}));

function reset(){
      document.body.style.backgroundColor = "white";
}

