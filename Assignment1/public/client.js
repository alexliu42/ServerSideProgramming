let count = 0;

function changecolor() {  
  if (count % 2 == 0){
    document.body.style.backgroundColor = "grey";
  }
  else
    document.body.style.backgroundColor = "white";
  count = count + 1;
}
