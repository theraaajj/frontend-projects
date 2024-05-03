const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    // koi bhi event hoga, toh usko listen bhi toh koi KeyboardEvent, therefore addEventListener
    button.addEventListener('click', function(elem){
        console.log(elem)
        console.log(elem.target)       // target yaani kis target se ye 'elem' element aaya hai
        if(elem.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(elem.target.id === 'white'){
            body.style.backgroundColor = elem.target.id;
        }
        if(elem.target.id === 'blue'){
            body.style.backgroundColor = elem.target.id;
        }
        if(elem.target.id === 'yellow'){
            body.style.backgroundColor = elem.target.id;
        }
    })
});