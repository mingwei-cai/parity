
let arrScore = [
	[1 / 1, 0 / 1, -1 / 1, -1 / 3, -3 / 3, -3 / 3, -1 / 2, -2 / 2, -2 / 2, -2 / 2, -3 / 5, -5 / 5, -5 / 5, -5 / 5, -5 / 5],
	[-1 / 1, -1 / 1, -1 / 1, -3 / 3, -3 / 3, -3 / 3, -2 / 2, -2 / 2, -2 / 2, -2 / 2, -5 / 5, -5 / 5, -5 / 5, -5 / 5, -5 / 5],
	[1 / 1, 1 / 3, -1 / 3, -1 / 11, -7 / 11, -7 / 11, -23 / 67, -53 / 67, -55 / 67, -61 / 67, -571 / 1149, -1001 / 1149, -1041 / 1149, -1101 / 1149, -1101 / 1149],
	[0 / 1, -1 / 3, -1 / 3, -6 / 11, -7 / 11, -9 / 11, -45 / 67, -53 / 67, -61 / 67, -61 / 67, -860 / 1149, -1001 / 1149, -1095 / 1149, -1101 / 1149, -1125 / 1149],
	[1 / 1, 1 / 3, -1 / 3, -1 / 11, -7 / 11, -7 / 11, -23 / 67, -53 / 67, -55 / 67, -61 / 67, -571 / 1149, -1001 / 1149, -1041 / 1149, -1101 / 1149, -1101 / 1149],
	[3 / 3, 6 / 11, 1 / 11, 4 / 24, -6 / 24, -6 / 24, -201 / 1446, -750 / 1446, -798 / 1446, -942 / 1446, -4791 / 13345, -9325 / 13345, -9925 / 13345, -10825 / 13345, -10825 / 13345],
	[1 / 3, 1 / 11, 1 / 11, -4 / 24, -6 / 24, -10 / 24, -558 / 1446, -750 / 1446, -942 / 1446, -942 / 1446, -7285 / 13345, -9325 / 13345, -10685 / 13345, -10825 / 13345, -11385 / 13345],
	[3 / 3, 7 / 11, 3 / 11, 6 / 24, -3 / 24, -3 / 24, -114 / 1446, -634 / 1446, -690 / 1446, -858 / 1446, -4255 / 13345, -8655 / 13345, -9355 / 13345, -10405 / 13345, -10405 / 13345],
	[3 / 3, 7 / 11, 7 / 11, 6 / 24, 3 / 24, -3 / 24, -114 / 1446, -402 / 1446, -690 / 1446, -690 / 1446, -4255 / 13345, -7315 / 13345, -9355 / 13345, -9565 / 13345, -10405 / 13345],
	[2 / 2, 45 / 67, 23 / 67, 558 / 1446, 114 / 1446, 114 / 1446, 185 / 1943, -401 / 1943, -455 / 1943, -617 / 1943, -4617594 / 27301206, -12597294 / 27301206, -13776894 / 27301206, -15546294 / 27301206, -15546294 / 27301206],
	[1 / 2, 23 / 67, 23 / 67, 201 / 1446, 114 / 1446, -60 / 1446, -185 / 1943, -401 / 1943, -617 / 1943, -617 / 1943, -8636817 / 27301206, -12597294 / 27301206, -15237612 / 27301206, -15546294 / 27301206, -16781022 / 27301206],
	[2 / 2, 53 / 67, 39 / 67, 750 / 1446, 402 / 1446, 402 / 1446, 401 / 1943, -113 / 1943, -175 / 1943, -361 / 1943, -2415354 / 27301206, -9844494 / 27301206, -11216414 / 27301206, -13274294 / 27301206, -13274294 / 27301206],
	[2 / 2, 55 / 67, 55 / 67, 798 / 1446, 690 / 1446, 474 / 1446, 455 / 1943, 175 / 1943, -105 / 1943, -105 / 1943, -1864794 / 27301206, -7091694 / 27301206, -10576294 / 27301206, -11002294 / 27301206, -12706294 / 27301206],
	[2 / 2, 61 / 67, 55 / 67, 942 / 1446, 690 / 1446, 690 / 1446, 617 / 1943, 175 / 1943, 105 / 1943, -105 / 1943, -213114 / 27301206, -7091694 / 27301206, -8655934 / 27301206, -11002294 / 27301206, -11002294 / 27301206],
	[5 / 5, 860 / 1149, 571 / 1149, 7285 / 13345, 4255 / 13345, 4255 / 13345, 8636817 / 27301206, 2415354 / 27301206, 1864794 / 27301206, 213114 / 27301206, 26606 / 453390, -80090 / 453390, -96090 / 453390, -120090 / 453390, -120090 / 453390],
	[3 / 5, 571 / 1149, 571 / 1149, 4791 / 13345, 4255 / 13345, 3183 / 13345, 4617594 / 27301206, 2415354 / 27301206, 213114 / 27301206, 213114 / 27301206, -26606 / 453390, -80090 / 453390, -115746 / 453390, -120090 / 453390, -137466 / 453390],
	[5 / 5, 1001 / 1149, 853 / 1149, 9325 / 13345, 7315 / 13345, 7315 / 13345, 12597294 / 27301206, 7695990 / 27301206, 7091694 / 27301206, 5278806 / 27301206, 80090 / 453390, -13235 / 453390, -31335 / 453390, -58485 / 453390, -58485 / 453390],
	[5 / 5, 1041 / 1149, 1041 / 1149, 9925 / 13345, 9355 / 13345, 8215 / 13345, 13776894 / 27301206, 11216414 / 27301206, 8655934 / 27301206, 8655934 / 27301206, 96090 / 453390, 31335 / 453390, -11835 / 453390, -17415 / 453390, -39735 / 453390],
	[5 / 5, 1101 / 1149, 1053 / 1149, 10825 / 13345, 9565 / 13345, 9565 / 13345, 15546294 / 27301206, 11627990 / 27301206, 11002294 / 27301206, 9125206 / 27301206, 120090 / 453390, 36765 / 453390, 17415 / 453390, -11610 / 453390, -11610 / 453390],
	[5 / 5, 1101 / 1149, 1101 / 1149, 10825 / 13345, 10405 / 13345, 9565 / 13345, 15546294 / 27301206, 13274294 / 27301206, 11002294 / 27301206, 11002294 / 27301206, 120090 / 453390, 58485 / 453390, 17415 / 453390, 11610 / 453390, -11610 / 453390],
];

let countBits = function (n) {
	n = (n & 0x55555555) + ((n >> 1) & 0x55555555);
	n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
	n = (n & 0x0F0F0F0F) + ((n >> 4) & 0x0F0F0F0F);
	n = (n & 0x00FF00FF) + ((n >> 8) & 0x00FF00FF);
	n = (n & 0x0000FFFF) + ((n >> 16) & 0x0000FFFF);
	return n;
};

let boardW = 0x55555555;
let boardD = 0x000FFFFF;
let boardR = 0x00F7BDEF;
let shiftU = ((n) => (n & boardD) << 5);
let shiftD = ((n) => (n >> 5) & boardD);
let shiftL = ((n) => (n & boardR) << 1);
let shiftR = ((n) => (n >> 1) & boardR);

let getBaseScore = function (r, cA, cB) {
	let nA = countBits(cA);
	let nB = countBits(cB);
	let wA = countBits(cA & boardW);
	let wB = countBits(cB & boardW);
	switch (r) {
		case 1:
			return (nA > wA ? wB > 0 ? arrScore[(nA + 1) * nA / 2 + wA - 0][(nB - 1) * nB / 2 + wB - 1] : 1 : -1);
		case 2:
			return (wA > 0 ? nB > 0 ? -arrScore[(nB + 1) * nB / 2 + wB - 1][(nA - 1) * nA / 2 + wA - 1] : 1 : -1);
		case 3:
			return (nA > 0 ? nB > wB ? arrScore[(nA + 1) * nA / 2 + wA - 1][(nB - 1) * nB / 2 + wB - 0] : 1 : -1);
	};
};

/** @type {(a:any[]) => void} */
let shuffle = function (a) {
	if (a.length > 1) {
		let i = Math.floor(Math.random() * a.length);
		let x = a[i];
		for (let n = a.length - 1; n > 0; --n) {
			a[i] = a[n];
			i = Math.floor(Math.random() * n);
			a[n] = a[i];
		};
		a[0] = x;
	};
};

let State = class {
	constructor(r, cA, cB) {
		this.round = r;
		this.chessA = cA;
		this.chessB = cB;
		this.score = getBaseScore(r, cA, cB);
	};
	round = 0;
	chessA = 0;
	chessB = 0;
	score = 0;
	/** @type {State[]} */
	nextState = null;
};

/** @type {(a:State[],i:number) => void} */
let insertState = function (a, i) {
	let x = a[i];
	while (i >= 1 && a[i - 1].score > x.score) {
		a[i] = a[i - 1];
		i -= 1;
	};
	a[i] = x;
};

/** @type {() => void} */
State.prototype.findNextState = function () {
	let rA = this.round;
	let rB = rA % 3 + 1;
	let cA = this.chessA;
	let cB = this.chessB;
	let z = [];
	let mA = 0;
	switch (rA) {
		case 1:
			mA = cA & ~boardW;
			break;
		case 2:
			mA = cA & boardW;
			break;
		case 3:
			mA = cA;
			break;
	};
	let mAU = mA & shiftD(~cA);
	let mAD = mA & shiftU(~cA);
	let mAL = mA & shiftR(~cA);
	let mAR = mA & shiftL(~cA);
	for (let i = 1 << 24; i > 0; i >>= 1) {
		if ((mA & i) == 0) { continue; };
		if ((mAU & i) > 0) {
			let j = shiftU(i);
			z.push(new State(rB, cB & ~j, cA ^ i ^ j));
		};
		if ((mAD & i) > 0) {
			let j = shiftD(i);
			z.push(new State(rB, cB & ~j, cA ^ i ^ j));
		};
		if ((mAL & i) > 0) {
			let j = shiftL(i);
			z.push(new State(rB, cB & ~j, cA ^ i ^ j));
		};
		if ((mAR & i) > 0) {
			let j = shiftR(i);
			z.push(new State(rB, cB & ~j, cA ^ i ^ j));
		};
	};
	shuffle(z);
	for (let i = 1; i < z.length; ++i) {
		insertState(z, i);
	};
	this.nextState = z;
};

/** @type {(d:number, sAMin:number, sAMax:number) => number} */
State.prototype.deepEvaluate = function (depth, sAMin, sAMax) {
	if (depth < countBits(this.chessA | this.chessB)) {
		// this.score = getEvaluateScore(this.round, this.chessA, this.chessB);
		// insertState(z, i);
		return this.score;
	};
	--depth;
	if (this.nextState == null) {
		this.findNextState();
	};
	let z = this.nextState;
	for (let i = 0; sAMin < sAMax && i < z.length; ++i) {
		let sA = -z[i].deepEvaluate(depth, -sAMax, -sAMin);
		insertState(z, i);
		if (sA > sAMin) {
			sAMin = sA;
		};
	};
	this.score = sAMin;
	return sAMin;
};

let ai = {};
let aiDepthMax = 19;
let aiTimer = 0;
/** @type {State} */
let aiState = null;

let PostData = class {
	constructor(a, v) {
		this.action = a;
		this.value = v;
	};
	action = '';
	value = null;
};

self.onmessage = function (ev) {
	/** @type {PostData} */
	let data = ev.data;
	setTimeout(ai[data.action], 100, ...data.value);
};

ai.setBoard = function (b) {
	boardW = b;
};

ai.startGame = function (bW, r, cA, cB, lv) {
	boardW = bW;
	aiState = new State(r, cA, cB);
	aiState.findNextState();
	aiDepthMax = lv + 14;
	self.postMessage(new PostData('startGame', null));
};

ai.think = function (r, cA, cB) {
	if (aiState.round != r) {
		let z = aiState.nextState;
		aiState = null;
		for (let i = 0; i < z.length; ++i) {
			if (z[i].chessA == cA && z[i].chessB == cB) {
				aiState = z[i];
				break;
			};
		};
	};
	aiState.deepEvaluate(aiDepthMax, -2, 2);
	aiState = aiState.nextState[0];
	result = aiState.chessB;
	self.postMessage(new PostData('think', result));
	return;
};
