const resultEl = document.querySelector('#result');
const loadEl = document.querySelector('#loading');

const playerScoreEl = document.querySelector('#player-score');
const cpuScoreEl = document.querySelector('#cpu-score');

let playerScore = 0;
let cpuScore = 0;

const gameLogic = (you, cpu) => {
	let result;

	loadEl.style.display = 'none';
	resultEl.style.display = 'block';

	if (you === cpu) {
		result = "It's a tie!";
	} else if (
		(you === 'rock' && cpu === 'scissors') ||
		(you === 'paper' && cpu === 'rock') ||
		(you === 'scissors' && cpu === 'paper')
	) {
		result = 'You win! 🎉';
		playerScore++;
	} else {
		result = 'You lose. 😞';
		cpuScore++;
	}

	playerScoreEl.innerText = playerScore;
	cpuScoreEl.innerText = cpuScore;

	resultEl.innerText = `You chose ${you} and the cpu chose ${cpu}. ${result}`;
};

const cpuPlay = () => {
	const choiceArr = ['rock', 'paper', 'scissors'];
	return choiceArr[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
};

const play = e => {
	const playerChoice = e.target.id;
	const cpuChoice = cpuPlay();

	loadEl.style.display = 'block';
	resultEl.style.display = 'none';

	setTimeout(gameLogic, 1000, playerChoice, cpuChoice);
};
