let ComputerScore = 0;
let playerScore = 0;
let playerScoreDisplay = document.getElementById("pl-sc");
let ComputerScoreDisplay = document.getElementById("co-sc");
let displayResult = document.getElementById("winner");
const playerHand = document.querySelector(".player-hand");
const compHand = document.querySelector(".computer-hand");
let randomHand = 0;
function getRandomHand() {
	let random = Math.random() * 3;
	randomHand = Math.floor(random);
	if (randomHand === 0) {
		compHand.src = "assets/rock.png";
	} else if (randomHand === 1) {
		compHand.src = "assets/paper.png";
	} else if (randomHand === 2) {
		compHand.src = "assets/scissors.png";
	}
}

function displayRock() {
	let updated_pt = false;
	const hand = document.querySelector(".field");
	hand.classList.add("hands");
	hand.addEventListener("animationend", function () {
		getRandomHand();
		playerHand.src = "assets/rock.png";
		if (randomHand === 1 && !updated_pt) {
			ComputerScore += 1;
			ComputerScoreDisplay.textContent = ComputerScore;
			displayResult.textContent = "Computer Won!";
			updated_pt = true;
		} else if (randomHand === 2 && !updated_pt) {
			playerScore += 1;
			playerScoreDisplay.textContent = playerScore;
			displayResult.textContent = "You Won!";
			updated_pt = true;
		} else if (!updated_pt) {
			displayResult.textContent = "Draw";
			updated_pt = true;
		}
		hand.classList.remove("hands");
	});
}
function displayPaper() {
	let updated_pt = false;
	const hand = document.querySelector(".field");
	hand.classList.add("hands");
	hand.addEventListener("animationend", function () {
		getRandomHand();
		playerHand.src = "assets/paper.png";
		if (randomHand === 2 && !updated_pt) {
			ComputerScore += 1;
			ComputerScoreDisplay.textContent = ComputerScore;
			displayResult.textContent = "Computer Won!";
			updated_pt = true;
		} else if (randomHand === 0 && !updated_pt) {
			playerScore += 1;
			playerScoreDisplay.textContent = playerScore;
			displayResult.textContent = "You Won!";
			updated_pt = true;
		} else if (!updated_pt) {
			displayResult.textContent = "Draw";
			updated_pt = true;
		}
		hand.classList.remove("hands");
	});
}
function displayScissor() {
	let updated_pt = false;
	const hand = document.querySelector(".field");
	hand.classList.add("hands");
	hand.addEventListener("animationend", function () {
		getRandomHand();
		playerHand.src = "assets/scissors.png";
		if (randomHand === 0 && !updated_pt) {
			ComputerScore += 1;
			playerScoreDisplay.textContent = playerScore;
			ComputerScoreDisplay.textContent = ComputerScore;
			displayResult.textContent = "Computer Won!";
			updated_pt = true;
		} else if (randomHand === 1 && !updated_pt) {
			playerScore += 1;
			playerScoreDisplay.textContent = playerScore;
			ComputerScoreDisplay.textContent = ComputerScore;
			displayResult.textContent = "You Won!";
			updated_pt = true;
		} else if (!updated_pt) {
			displayResult.textContent = "Draw";
			updated_pt = true;
		}
		hand.classList.remove("hands");
	});
}