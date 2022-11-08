const NumberContainer = document.getElementsByClassName('NumberContainer')[0];
let   sum = 1 ; 
NumberContainer.textContent = sum ;
const IncrementDecrementFunction = (event)=>{
    console.log(event.target);
    const condtionElement = '<div class="IncrementButton" onclick="IncrementDecrementFunction(event)"></div>' 
    console.log(NumberContainer);    
    if( document.getElementsByClassName('IncrementButton')[0] === event.target){
        console.log('Increment button was clicked')
        console.log(event.target,);
        sum++ ;
        NumberContainer.innerText = sum ;
    }else{
        console.log('decrement button was clicked ')
        console.log(event.target,0);
        sum-- ;
        NumberContainer.textContent = sum ;
    }
    
    
    
    }
    const iButton = document.getElementsByClassName('IncrementButton')[0].addEventListener('click',IncrementDecrementFunction(event));
    const dButton = document.getElementsByClassName('DecrementButton')[1].addEventListener('click',IncrementDecrementFunction(event));