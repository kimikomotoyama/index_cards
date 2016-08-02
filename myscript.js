(function(){
	'use strict';
	var words = [
		{'en': 'read', 'ja': '読む'},
		{'en': 'write', 'ja': '書く'},
		{'en': 'eat', 'ja': '食べる'},
		{'en': 'run', 'ja': '走る'},
		{'en': 'walk', 'ja': '歩く'}
	];

	var card = document.getElementById('card');
	var cardFront = document.getElementById('card-front');
	var cardBack = document.getElementById('card-back');
	var btn = document.getElementById('btn');

	btn.addEventListener('click', function(){
		next();
	});
	
	card.addEventListener('click', function(){
		flip();
	});

	function flip(){
		card.className = card.className === '' ? 'open': '';
	}

	function next(){
		if(card.className === 'open') {
			card.addEventListener('transitioned', setCard);
			flip();
		} else {
			setCard();
		}
	}
	function setCard(){
		var num = Math.floor(Math.random() * words.length);
		console.log(num);
		cardFront.innerHTML = words[num].en;
		cardBack.innerHTML = words[num].ja;

	}

	window.addEventListener('keyup', function(e) {
    // e.keyCode
    // f: 70
    // n: 78
    // console.log(e.keyCode);
    if (e.keyCode === 70) {
      flip();
    } else if (e.keyCode === 78) {
      next();
    }
   });


	setCard();

})();







