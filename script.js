const choices = ["paper","rock","scissors"];
let playerScore = 0;
const gameBoxes = document.querySelectorAll(".game-icon--box");
const paperImg = "images/icon-paper.svg";
const rockImg = "images/icon-rock.svg";
const scissorsImg = "images/icon-scissors.svg";
let houseChoose = document.querySelector(".house-choice");
let playerChoice =document.querySelector(".player-choice")
let playerScoreContent = document.querySelector(".playerScore");
let gameResult = document.querySelector(".result-text");
let playAgainBtn = document.querySelector(".btn-again");
const gamePage = document.querySelector(".game-play--page");
const resultPage = document.querySelector(".game-result--page");

// HOUSE CHOICE FUNCTION

function getHouseChoice(){
	const random = Math.floor(Math.random()*choice.length);
	let houseChoice = choices[random];
}
// CLICKING ON PAPER,ROCK,SCISSORS

gameBoxes.forEach((gameBox) => {
	gameBox.addEventListener("click", playRound)
});

function showResultPage() {
	gamePage.style.display = "none";
	resultPage.style.display = "block";
}

// PLAYROUND FUNCTION

function playRound(playerSelection, houseSelection) {
	
	const random = Math.floor(Math.random()* choices.length );
	playerBox = document.createElement("p");	
	
	playerImg = document.createElement("img");
	playerSelection = this.id;
// ADDING IMAGE TO ID
	if (playerSelection === "rock") {
			playerImg.src = rockImg;
				playerBox.style.backgroundColor ="white";
				playerBox.classList = "game-icon game-icon--rock";
				playerChoice.append(playerBox);
				
				playerBox.append(playerImg);
				showResultPage();
			} if (playerSelection === "paper") {
				
				playerImg.src = paperImg;
				playerBox.style.backgroundColor ="white";
				playerBox.classList = "game-icon game-icon--paper";
				playerChoice.append(playerBox);
				playerBox.append(playerImg);
				showResultPage();
			} if (playerSelection === "scissors") {
				
				playerImg.src = scissorsImg;
				playerBox.style.backgroundColor ="white";
				playerBox.classList = "game-icon game-icon--scissors";
				playerChoice.append(playerBox);
				playerBox.append(playerImg);
				showResultPage();
			} 

 //COMPUTER CHOICE AND IMAGE TO CHOICE 
 
setTimeout(() => {		
	let houseChoice = choices[random];
	houseSelection = houseChoice;
	houseBox = document.createElement("p");
	houseImg = document.createElement("img");
			
			if (houseSelection === "rock") {
				
				houseImg.src = rockImg;

				houseBox.style.backgroundColor ="white";
				houseBox.classList = "game-icon game-icon--rock";
				
				houseChoose.append(houseBox);
				houseBox.append(houseImg);
			} if (houseSelection === "paper") {
				
				houseImg.src = paperImg;
				houseBox.style.backgroundColor ="white";
				houseBox.classList = "game-icon game-icon--paper";

				
				houseChoose.append(houseBox);
				houseBox.append(houseImg)
				
			} if (houseSelection === "scissors") {
				
				houseImg.src = scissorsImg;
				houseBox.style.backgroundColor ="white";
				houseBox.classList = "game-icon game-icon--scissors";

				
				houseChoose.append(houseBox);
				houseBox.append(houseImg);
				
			} }, 400);

// MAIN LOGIC 

setTimeout(()=> {	
	if (playerSelection === "rock" && houseSelection === "rock" ||playerSelection === "paper" && houseSelection === "paper"|| playerSelection === "scissors" && houseSelection === "scissors") {
				gameResult.textContent = "It's a tie";
				playAgainBtn.style.display = "block";
				
		} else if (playerSelection === "rock" && houseSelection === "paper") {
				
				playerScore --;
				gameResult.textContent = "You Lose";
				playAgainBtn.style.display = "block";
				playerScoreContent.textContent = playerScore; 
				
				
		} else if (playerSelection === "rock" && houseSelection === "scissors") {
				playerScore ++;
				
				gameResult.textContent = "You Win";
				playAgainBtn.style.display = "block";
				playerScoreContent.textContent = playerScore;
				
			
		} else if (playerSelection === "paper" && houseSelection === "rock") {
				playerScore ++;
				
				gameResult.textContent = "You Win";
				playAgainBtn.style.display = "block";
				playerScoreContent.textContent = playerScore;
				
				

		} else if (playerSelection === "paper" && houseSelection === "scissors") {
				playerScore --;
				gameResult.textContent = "You Lose" ;
				playAgainBtn.style.display = "block";
				playerScoreContent.textContent = playerScore;
				
			
	   } else if (playerSelection === "scissors" && houseSelection === "rock") {
	   			playerScore --;
				gameResult.textContent = "You Lose";
				playAgainBtn.style.display = "block";
				playerScoreContent.textContent = playerScore; 
				
				
		} else {
				playerScore ++;
				
				gameResult.textContent = "You Win";
				playAgainBtn.style.display = "block";
				playerScoreContent.textContent = playerScore;
				
				
			}
		}, 600);
}

// PLAY AGAIN BUTTON

playAgainBtn.addEventListener("click", function() {
	playerChoice.textContent = "";
	houseChoose.textContent ="";
	gameResult.textContent = "";
	playAgainBtn.style.display = "none";
	resultPage.style.display = "none";
	gamePage.style.display = "block";
})


// MODAL FUNCTIONALITY

const rulesBtn = document.querySelector(".btn-rules");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".icon-close");

rulesBtn.addEventListener("click", function() {
	modal.style.display = "block";
})
closeModal.addEventListener("click", function() {
	modal.style.display = "none";
})
window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}