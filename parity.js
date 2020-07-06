
/** @type {(s:string)=>HTMLInputElement} */
let $ = ((s) => document.querySelector(s));

let aiWorker = new Worker('ai.js');
let PostData = class {
	constructor(a, v) {
		this.action = a;
		this.value = v;
	};
	action = '';
	value = null;
};

/** @typedef {Object} Point
 * @property {string} chess
 * @property {string} cell
 * @property {string} hit
 */
/** @type {Point[]} */
let arrPoint = new Array(25);
/** @type {Point} */
let step = $('#Step').dataset;

let turn = 0;
let turnAi = 0;
let round = 0;
let isAllowClick = false;
let startChess = [0x0000001F, 0x01F00000];
let chess = [0, 0];
let indexFrom = -1;
let hitTo = 0;

let boardW = 0x55555555;
let boardD = 0x000FFFFF;
let boardR = 0x00F7BDEF;
let shiftU = ((n) => (n & boardD) << 5);
let shiftD = ((n) => (n >> 5) & boardD);
let shiftL = ((n) => (n & boardR) << 1);
let shiftR = ((n) => (n >> 1) & boardR);

let setChess = function (index, player) {
	chess[player - 1] |= 1 << index;
	chess[2 - player] &= ~(1 << index);
	arrPoint[index].chess = player;
};

let clearChess = function (index) {
	chess[0] &= ~(1 << index);
	chess[1] &= ~(1 << index);
	arrPoint[index].chess = 0;
};

let clearHit = function () {
	indexFrom = -1;
	hitTo = 0;
	for (let i = 0; i < 25; ++i) {
		arrPoint[i].hit = 0;
	};
};

let isEnd = function () {
	let c = chess[turn - 1];
	let m = 0;
	switch (round) {
		case 1:
			m = c & ~boardW;
			break;
		case 2:
			m = c & boardW;
			break;
		case 3:
			m = c;
			break;
	};
	return (((shiftU(m) | shiftD(m) | shiftL(m) | shiftR(m)) & ~c) == 0);
};

let setMessage = function (s) {
	$('#Message').textContent = s;
};

let nextStep = function () {
	step.chess = turn;
	step.cell = round;
	if (isEnd()) {
		setMessage(turn == 1 ? 'Blue Win!' : 'Red Win!');
		$('#Menu').disabled = false;
	} else if ((turn & turnAi) > 0) {
		setMessage('(∫・ω・)∫');
		aiWorker.postMessage(new PostData('think', [round, chess[turn - 1], chess[2 - turn]]));
	} else {
		setMessage('');
		isAllowClick = true;
	};
};

let moveFrom = function (index) {
	clearHit();
	if ((chess[turn - 1] >> index & 1) > 0) {
		indexFrom = index;
		arrPoint[index].hit = 1;
		hitTo = 0;
		if (((boardW >> index & 1) + 1 & round) > 0) {
			let i = 1 << index;
			let j = 0;
			let c = ~chess[turn - 1];
			j = shiftU(i) & c;
			if (j > 0) {
				hitTo |= j;
				arrPoint[index + 5].hit = 2;
			};
			j = shiftD(i) & c;
			if (j > 0) {
				hitTo |= j;
				arrPoint[index - 5].hit = 2;
			};
			j = shiftL(i) & c;
			if (j > 0) {
				hitTo |= j;
				arrPoint[index + 1].hit = 2;
			};
			j = shiftR(i) & c;
			if (j > 0) {
				hitTo |= j;
				arrPoint[index - 1].hit = 2;
			};
		};
	};
};

let moveTo = function (index) {
	if ((hitTo >> index & 1) > 0) {
		isAllowClick = false;
		clearChess(indexFrom);
		clearHit();
		setChess(index, turn);
		turn = turn % 2 + 1;
		round = round % 3 + 1;
		nextStep();
	};
};

let clickHitArea = function () {
	if (isAllowClick) {
		let i = +this.dataset.index;
		if ((hitTo >> i & 1) > 0) {
			moveTo(i);
		} else if (i == indexFrom) {
			clearHit();
		} else {
			moveFrom(i);
		};
	};
};

let startGame = function () {
	chess = [0, 0];
	for (let i = 0; i < 25; ++i) {
		setChess(i, (startChess[1] >> i & 1) << 1 | (startChess[0] >> i & 1));
	};
	setMessage('');
	nextStep();
};

let resetGame = function () {
	$('#Menu').disabled = true;
	isAllowClick = false;
	round = 1;
	turn = +$('[name="player"]:checked').value;
	turnAi = ($('#Ai2').checked ? 2 : 0) | ($('#Ai1').checked ? 1 : 0);
	if (turnAi > 0) {
		aiWorker.postMessage(new PostData('startGame', [boardW, 1, startChess[turn - 1], startChess[2 - turn], +$('#Level').value]));
	} else {
		startGame();
	};
};

let ai = {};

aiWorker.onmessage = function (ev) {
	/** @type {PostData} */
	let data = ev.data;
	setTimeout(ai[data.action], 0, data.value);
};

ai.startGame = startGame;

let getIndex = function (bit) {
	let i = 0;
	i |= ((bit & 0x55555555) > 0 ? 0 : 1);
	i |= ((bit & 0x33333333) > 0 ? 0 : 2);
	i |= ((bit & 0x0F0F0F0F) > 0 ? 0 : 4);
	i |= ((bit & 0x00FF00FF) > 0 ? 0 : 8);
	i |= ((bit & 0x0000FFFF) > 0 ? 0 : 16);
	return i;
};

ai.think = function (result) {
	let c = chess[turn - 1];
	moveFrom(getIndex(c & ~result));
	setTimeout(moveTo, 400, getIndex(result & ~c));
};

let changeBoard = function () {
	boardW = ~boardW;
	for (let i = 0; i < 25; ++i) {
		arrPoint[i].cell = (boardW >> i & 1) + 1;
		arrPoint[i].chess = 0;
	};
};

!function () {
	let fragment = document.createDocumentFragment();
	for (let i = 0; i < 25; ++i) {
		let div = document.createElement('div');
		/** @type {Point} */
		let point = div.dataset;
		point.cell = (boardW >> i & 1) + 1;
		point.chess = 0;
		point.hit = 0;
		arrPoint[i] = point;
		let chess = document.createElement('div');
		chess.className = 'chess';
		let hitPoint = document.createElement('div');
		hitPoint.className = 'hit-point';
		let hitArea = document.createElement('div');
		hitArea.className = 'hit-area';
		hitArea.dataset.index = i;
		hitArea.onclick = clickHitArea;
		div.appendChild(chess);
		div.appendChild(hitPoint);
		div.appendChild(hitArea);
		fragment.appendChild(div);
	};
	$('#BoardBox').appendChild(fragment);
}();

$('#Ai1').checked = true;
$('#Ai2').checked = false;
$('#Player2').checked = true;
$('#Level').value = +$('#Level').min;
$('#Board').onclick = changeBoard;
$('#Start').onclick = resetGame;
$('#Menu').disabled = false;
