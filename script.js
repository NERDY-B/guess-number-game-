'use strict';
/*
console.log(document.querySelector('.message').textContent);

//changing content of html tag which in DOM means object 

document.querySelector ('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score',).textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = Number(document.querySelector('.score').textContent);
// console.log(typeof score);

// document.querySelector('.number').textContent = secretNumber;
let highScore = 0;
function displayMessage (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
  
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no value
    if(!guess){
        displayMessage('🙄 No Number');
    }
    // when the player wins 
    else if(guess === secretNumber){
        displayMessage('Correct Number');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore){

            highScore = score;
            document.querySelector('.highscore').textContent = highScore; 
        }
    }
    // when guess is too high 
    else if(guess !== secretNumber)
    {
        // debugger
        if(score > 0){

            // document.querySelector('.message').textContent = guess > secretNumber? 'too High': 'Too Low';

            displayMessage(guess > secretNumber? 'too High': 'too Low');
            score--;
            document.querySelector('.score').textContent = score;
            
        }
        else {
            
            // document.querySelector ('.message').textContent = '😆 Ma man you lost';
            displayMessage('😆 Ma man you lost');
            document.querySelector('.score').textContent = 0;
           
        }
    }


// when guess is too low

//     else if(guess < secretNumber){


//         if(score > 0){

//             // document.querySelector('.message').textContent = '👎 Too High';
//             // score--;
//             // document.querySelector('.score').textContent = score;
//             document.querySelector('.message').textContent = '👎 Too Low';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }
//         else{
//             document.querySelector('.message').textContent = '😆 Ma man you lost';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// });
/*select the element in 
add eventlistener
    pass name of event, and function defintion
    in the function change style to of body to black 
    reset width of class number to half it size
    set the value of input guess to empty string

*/
});
document.querySelector('.again').addEventListener('click', function(){

    let secretNumber = Math.trunc(Math.random()*20) + 1;

    let score = Number(document.querySelector('.score').textContent);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

});
