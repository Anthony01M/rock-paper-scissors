document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultMessage = document.getElementById('result-message');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const winner = determineWinner(playerChoice, computerChoice);
            displayResult(playerChoice, computerChoice, winner);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'player';
        }
        return 'computer';
    }

    function displayResult(player, computer, winner) {
        if (winner === 'draw') {
            resultMessage.textContent = `It's a draw! You both chose ${player}.`;
        } else if (winner === 'player') {
            resultMessage.textContent = `You win! ${player} beats ${computer}.`;
        } else {
            resultMessage.textContent = `You lose! ${computer} beats ${player}.`;
        }
    }

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});