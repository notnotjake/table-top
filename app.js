let state = 'start'

function gameScores (p1, p2) {
	if (p1 == 0 && p2 == 0) {
		console.log('setting both scores to 0')
		document.querySelector('#p1-score').innerHTML = '0'
		document.querySelector('#p2-score').innerHTML = '0'
	} else if (p1 != 0) {
		console.log('incrementing p1 score')
		let i = parseInt(document.querySelector('#p1-score').innerHTML) + p1
		document.querySelector('#p1-score').innerHTML = i
	} else if (p2 != 0) {
		console.log('incrementing p2 score')
		let i = parseInt(document.querySelector('#p2-score').innerHTML) + p2
		document.querySelector('#p2-score').innerHTML = i
	} else {
		console.log('thats not supposed to happen...')
	}
	
	if (state == 'start') {
		document.querySelector('#game-button').innerHTML = 'Start by giving a player a point'
	} else if (state == 'ongoing') {
		document.querySelector('#game-button').innerHTML = 'Reset Scores'
	} else {
		console.log('thats not supposed to happen v2...')
	}
}

document.querySelector('#p1-card').addEventListener('click', () => {
	state = 'ongoing'
	console.log('p1 clicked')
	gameScores(1,0)
})
document.querySelector('#p2-card').addEventListener('click', () => {
	state = 'ongoing'
	console.log('p2 clicked')
	gameScores(0,1)
})

function gameButton () {
	if (state == 'ongoing') {
		console.log('resetting score')
		state = 'start'
		gameScores(0, 0)
	} else if (state == 'start') {
		console.log('doing nothing')
	}
}

document.querySelector('.game').addEventListener('click', () => {
	gameButton()
})