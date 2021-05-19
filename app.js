class player {
	constructor(name, score, colorMain, colorSub, wins, element) {
		this.name = name
		this.score = score
		this.colorMain = colorMain
		this.colorSub = colorSub
		this.wins = wins
		this.element = element
	}
}

let p1 = new player("Player One", 0, '#62E379', '#000000', 0, document.querySelector('#p1-score') )
let p2 = new player("Player Two", 0, '#92A5EE', '#000000', 0, document.querySelector('#p2-score') )
let text = document.querySelector('#game-button')

let game = {
	state: "start",
	scoreToWin: document.querySelector('#play-to-input').value,
	players: [p1, p2],
	winner: null
}

function updateScore (player) {
	player.element.innerHTML = player.score
}

function updateGame () {
	if (p1.score == game.scoreToWin) {
		game.state = 'end'
		game.winner = p1
		p1.wins += 1
	} else if (p2.score == game.scoreToWin) {
		game.state = 'end'
		game.winner = p2
		p2.wins += 1
	}
	
	if (game.state == 'playing') {
		text.innerHTML = 'Tap to Reset'
	} else if (game.state == 'end') {
		text.innerHTML = game.winner.name + " Won!"
	} else if (game.state == 'start') {
		text.innerHTML = game.winner.name + " Give a point by tapping a player's square"
	}
}

function gameClick (player) {
	if (game.state != 'end') {
		game.state = 'playing'
		game.scoreToWin = document.querySelector('#play-to-input').value,
		player.score += 1
		updateScore(player)
	}
	updateGame()
}

function resetGame () {
	game.state = 'start'
	p1.score = 0
	p2.score = 0
	updateScore(p1)
	updateScore(p2)
}


document.querySelector('#p1-card').addEventListener('click', () => {
	gameClick(p1)
})
document.querySelector('#p2-card').addEventListener('click', () => {
	gameClick(p2)
})
document.querySelector('#controls').addEventListener('click', () => {
	if (game.state == 'start') {
		document.querySelector('#play-to-input').focus()
		document.querySelector('#play-to-input').select()
	} else if ( game.state == 'playing') {
		console.log('add confirm reset')
		resetGame()
	} else {
		resetGame()
	}
})