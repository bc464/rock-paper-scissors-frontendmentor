const choices = ["paper","rock","scissors"];
let playerScore = 0;
const gameBoxes = document.querySelectorAll(".game-icon--box");


// MODAL FUNCTINALITY
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
