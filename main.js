const display = document.getElementById("screen");
const buttons = document.getElementsByClassName("btn");
const result = document.getElementById('equal');
const clear = document.getElementById("reset");
const back = document.getElementById("backspace");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", () => {
    display.value += btn.innerHTML;
  });
  result.addEventListener('click', () => {
       display.value = eval(display.value)
  })
});

function resetHandler(){
    if(display.value.length > 0){
        display.value = null;}
}

function backHandler(){
    let value = display.value.split('');
    value.splice(-1,1)
    display.value = value.join('');
    
}

back.addEventListener('click', backHandler)
clear.addEventListener('click', resetHandler);