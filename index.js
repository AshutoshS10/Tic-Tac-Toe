const gameBoard = document.getElementById("gameBoard");
const boxes = Array.from(document.getElementsByClassName('box'));
const restartBtn = document.getElementById('restartBtn');
const playText = document.getElementById('playText');
const spaces = [];
const O_Text = "O";
const x_Text = "X";
let currentPlayer;

const drawBoard = () => {
     boxes.forEach((box, index) => {
         let styleString = '';
         if(index < 3) {
            styleString += `border-bottom: 3px solid purple;`;
         }
         if(index % 3 === 0) {
            styleString += `border-right: 3px solid purple;`;
         }
         if(index % 3 === 2) {
            styleString += `border-left: 3px solid purple;`;
         }
         if(index > 5) {
            styleString += `border-top: 3px solid purple;`;
         }
         box.style = styleString;
         box.addEventListener('click', boxClicked); 
     });
};

const boxClicked = (e) =>{
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innerHTML = `${currentPlayer} has won`;
            return;
        }
        currentPlayer = currentPlayer === O_Text ? x_Text: O_Text;
    }
};

const playerHasWon = () => {
    if(spaces[0] === currentPlayer){
        if(spaces [1] === currentPlayer && spaces [2] === currentPlayer){
            console.log(`${currentPlayer} Wins up Top.`);
            return true;
        }
        if(spaces [3] === currentPlayer && spaces [6] === currentPlayer){
            console.log(`${currentPlayer} Wins up Left.`);
            return true;
        }
        if(spaces [4] === currentPlayer && spaces [8] === currentPlayer){
            console.log(`${currentPlayer} Wins Diagonaly.`);
            return true;
        }
    }  
    if(spaces[8] === currentPlayer){
        if(spaces [6] === currentPlayer && spaces [7] === currentPlayer){
            console.log(`${currentPlayer} Wins up Bottom.`);
            return true;
        }
        if(spaces [2] === currentPlayer && spaces [5] === currentPlayer){
            console.log(`${currentPlayer} Wins up Right.`);
            return true;
        }
    }
    if(spaces[4] === currentPlayer){
        if(spaces [1] === currentPlayer && spaces [7] === currentPlayer){
            console.log(`${currentPlayer} Wins Vertically in the Middle.`);
            return true;
        }
        if(spaces [3] === currentPlayer && spaces [5] === currentPlayer){
            console.log(`${currentPlayer} Wins Horizontally in the Middle.`);
            return true;
        }
    }
};


const restart = () => {
        spaces.forEach((space, index)=> {
            spaces[index] = null;
        });
        boxes.forEach(box =>{
            box.innerText = '';
        });
        playText.innerHTML = `Let's Play!`;
        currentPlayer = O_Text;    
}


restartBtn.addEventListener('click', restart);

restart();
drawBoard();