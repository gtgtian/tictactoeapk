const board = document.getElementById('board');

// Create the Tic Tac Toe board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell${i}`;
    board.appendChild(cell);

    // Add click event listener to each cell
    cell.addEventListener('click', () => cellClicked(i));
}

let currentPlayer = 'X';
const cells = new Array(9).fill('');

// Function to handle cell clicks
function cellClicked(index) {
    if (cells[index] === '' && !checkWinner()) {
        cells[index] = currentPlayer;
        document.getElementById(`cell${index}`).textContent = currentPlayer;
        
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
        } else if (!cells.includes('')) {
            alert('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to check for a winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a] !== '' && cells[a] === cells[b] && cells[a] === cells[c]) {
            return true;
        }
    }

    return false;
}
