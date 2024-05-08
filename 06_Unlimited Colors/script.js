// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'                          // yaha const color nhi liye warna change hi nahi kar paate
    for (let i = 0; i < 6; i++) {
        color += hex[(Math.floor(Math.random() * 16))]
    }
    return color
}
let intervalId;                               // global scope banaege taaki stopChangingColor() function bhi use kar paaye
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBg, 1000);
    }
    function changeBg (){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;              // jab kaam hogya, stop krdiye, toh flush out krdo na!
};
const start = document.querySelector('#start').addEventListener('click', startChangingColor);
const stop = document.querySelector('#stop').addEventListener('click', stopChangingColor);