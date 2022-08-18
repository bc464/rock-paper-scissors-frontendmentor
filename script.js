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

function createPlayerImg() {
	let playerImg = document.createElement("img");
}

// PLAYROUND FUNCTION
function playRound(playerSelection, houseSelection) {
	// playerChoice.textContent = " ";
	// computerChoose.textContent = " ";
	const random = Math.floor(Math.random()* choices.length );	
	playerImg = document.createElement("img");
	playerSelection = this.id;
// ADDING IMAGE TO ID
	if (playerSelection === "rock") {
			playerImg.src = rockImg;
				playerImg.style.width = "100%"; 
				playerChoice.append(playerImg)
				showResultPage();
			} if (playerSelection === "paper") {
				
				playerImg.src = paperImg;
				playerImg.style.width = "100%"; 
				playerChoice.append(playerImg)
				showResultPage();
			} if (playerSelection === "scissors") {
				
				playerImg.src = scissorsImg;
				playerImg.style.width = "100%"; 
				playerChoice.append(playerImg)
				showResultPage();
			} 
 //COMPUTER CHOICE AND IMAGE TO CHOICE 
			
	let houseChoice = choices[random];
	houseSelection = houseChoice;
	houseBox = document.createElement("p");
	houseImg = document.createElement("img");
			
			if (houseSelection === "rock") {
				
				houseImg.src = rockImg;
				// houseBox.style.width = "100%";
				houseBox.style.backgroundColor ="white";
				houseBox.classList = "game-icon game-icon--rock";
				// houseBox.classList = "game-icon--rock";
				houseChoose.append(houseBox);
				houseBox.append(houseImg);
			} if (houseSelection === "paper") {
				
				houseImg.src = paperImg;
				// houseBox.style.width = "100%";
				houseBox.style.backgroundColor ="white";
				houseBox.classList = "game-icon game-icon--paper";
				// houseBox.classList = "game-icon--paper";
				houseChoose.append(houseBox);
				houseBox.append(houseImg)
				
			} if (houseSelection === "scissors") {
				
				houseImg.src = scissorsImg;
				// houseBox.style.width = "100%";
				houseBox.style.backgroundColor ="white";
				houseBox.classList = "game-icon game-icon--scissors";
				// houseBox.classList = "game-icon--scissors";
				houseChoose.append(houseBox);
				houseBox.append(houseImg);
				
			} 
// MAIN LOGIC 
		
	if (playerSelection === "rock" && houseSelection === "rock" ||playerSelection === "paper" && houseSelection === "paper"|| playerSelection === "scissors" && houseSelection === "scissors") {
				gameResult.textContent = "It's a tie";
				
				
		} else if (playerSelection === "rock" && houseSelection === "paper") {
				
				playerScore --;
				gameResult.textContent = "You Lose";
				playerScoreContent.textContent = playerScore; 
				
		} else if (playerSelection === "rock" && houseSelection === "scissors") {
				playerScore ++;
				
				gameResult.textContent = "You Win";
				playerScoreContent.textContent = playerScore;
				
			
		} else if (playerSelection === "paper" && houseSelection === "rock") {
				playerScore ++;
				
				gameResult.textContent = "You Win";
				playerScoreContent.textContent = playerScore;
				

		} else if (playerSelection === "paper" && houseSelection === "scissors") {
				playerScore --;
				gameResult.textContent = "You Lose" 
				playerScoreContent.textContent = playerScore;
			
	   } else if (playerSelection === "scissors" && houseSelection === "rock") {
	   			playerScore --;
				gameResult.textContent = "You Lose";
				playerScoreContent.textContent = playerScore; 
				
		} else {
				playerScore ++;
				
				gameResult.textContent = "You Win";
				playerScoreContent.textContent = playerScore;
				
			}
		};



// PLAY AGAIN BUTTON
playAgainBtn.addEventListener("click", function() {
	playerChoice.textContent = "";
	houseChoose.textContent ="";
	resultPage.style.display = "none";
	gamePage.style.display = "block";
})





// MODAL FUNCTIONALITY
const rulesBtn = document.querySelector(".btn-rules");
const modalDesktop = document.querySelector(".modal-desktop");
const closeModal = document.querySelector(".icon-close");

rulesBtn.addEventListener("click", function() {
	modalDesktop.style.display = "block";
})
closeModal.addEventListener("click", function() {
	modalDesktop.style.display = "none";
})
window.onclick = function(event) {
	if(event.target == modalDesktop) {
		modalDesktop.style.display = "none";
	}
}
