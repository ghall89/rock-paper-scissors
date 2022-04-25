const resultEl = document.querySelector('#result');

const choiceArr = ['rock', 'paper', 'scissors'];
const resultArr = [' You win! 🎉', 'You lose. 😞'];

const gameLogic = (you, cpu) => {
	resultEl.innerText = `You chose ${you} and the cpu chose ${cpu}.`;
};

const cpuPlay = () => choiceArr[Math.floor(Math.random() * (2 - 0 + 1) + 0)];

const play = e => {
	const clickedId = e.target.id;
	const cpuChoice = cpuPlay();

	gameLogic(clickedId, cpuChoice);
};
