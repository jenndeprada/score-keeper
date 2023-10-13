const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const p1ScoreDisplayed = document.querySelector('#p1Score');
const p2ScoreDisplayed = document.querySelector('#p2Score');

let winningScore = 3;
const playingTo = document.querySelector('#playingTo');

let p1ScoreTrack = 0;
let p2ScoreTrack = 0;

let isGameOver = false;



playingTo.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})



p1Button.addEventListener('click', function(){

    if(!isGameOver){
        p1ScoreTrack+=1;
            
        if(p1ScoreTrack === winningScore){
            isGameOver = true;
            p1ScoreDisplayed.classList.add('has-text-primary');   
            p2ScoreDisplayed.classList.add('has-text-danger');
                
        }
        p1ScoreDisplayed.textContent = p1ScoreTrack;
    
    }
})


p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2ScoreTrack+=1;
        
        if(p2ScoreTrack === winningScore){
            isGameOver = true;
            p2ScoreDisplayed.classList.add('has-text-primary');
            p1ScoreDisplayed.classList.add('has-text-danger');
        }
        p2ScoreDisplayed.textContent = p2ScoreTrack;

    }
})


const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset)



function reset(){
    isGameOver = false;
    p1ScoreTrack = 0;
    p2ScoreTrack = 0;

    p1ScoreDisplayed.textContent = 0;
    p2ScoreDisplayed.textContent = 0;

    p2ScoreDisplayed.classList.remove('has-text-danger', 'has-text-primary');
    p1ScoreDisplayed.classList.remove('has-text-primary', 'has-text-danger');

}




