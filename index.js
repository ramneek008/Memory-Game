const cards = document.querySelectorAll(".card");
// console.log(cards);
cards.forEach((card) => {
	card.addEventListener("click", flip);
})

var isFlipped = false;
var firstCard;
var seecondCard;
var isTimeout = false;

function flip(){
	//console.log(this);
	if(!isTimeout)
	{
		this.classList.add("flip");
		if(!isFlipped)
		{
			isFlipped=true;
			firstCard=this;
		}
		else
		{
			secondCard=this;
			checkIt();
		}
	}
	
}

function checkIt(){
	if(firstCard.dataset.image === secondCard.dataset.image)
	{
		success();
	}
	else
	{
		fail();
	}
}

function success(){
	firstCard.removeEventListener("click", flip);
	secondCard.removeEventListener("click", flip);
	reset();
}

function fail(){
	isTimeout=true;
	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");
		isTimeout=false;
		reset();
	},600);
}

function reset(){
	isFlipped=false;
	firstCard=null;
	secondCard=null;
}

function shuffle(){
	cards.forEach((card) => {
		var index = Math.floor(Math.random() * 16);
		card.style.order = index;
	})
}

shuffle();