const burger = document.querySelector('.burger-container')
const menuLinks = document.querySelector('.nav-container')
const nav = document.querySelector('.nav');
const burgerContainer = document.querySelector('.burger-container');
const blurMain = document.querySelector('main');
const navContainer = document.querySelector('.intro-container');
const topBun = document.querySelector('.hamburger-tbun')
const filling = document.querySelector('.hamburger-filling')
const bottomBun = document.querySelector('.hamburger-bbun')

burger.addEventListener('click', () => {
	if(nav.classList.contains('hide')){
		burgerContainer.classList.add('sliding-menu-button');
		blurMain.classList.add('mainblur');
		navContainer.classList.add('mainblur');
		nav.classList.remove('hide');
	} else {
		nav.classList.add('hide');
		burgerContainer.classList.remove('sliding-menu-button');
		blurMain.classList.remove('mainblur');navContainer.classList.remove('mainblur');
		nav.classList.add('hide') & blurMain.classList.remove('mainblur');
		navContainer.classList.remove('mainblur');
		}
	})

menuLinks.addEventListener('click', () => {
	if (nav.classList.contains('hide')) {
		nav.classList.remove('hide');
	  } else {
		nav.classList.add('hide') & blurMain.classList.remove('mainblur') & navContainer.classList.remove('mainblur');
	  }
	})

window.addEventListener('scroll', (e) => {
	if ( (window.scrollY / .99) >= window.outerHeight ) {
		console.log(scrollY)
		topBun.classList.remove('burger-yum');
		topBun.classList.add('burger-burnt');
		filling.classList.remove('burger-yum');
		filling.classList.add('burger-burnt');
		bottomBun.classList.remove('burger-yum');
		bottomBun.classList.add('burger-burnt');
	} else {
		topBun.classList.add('burger-yum');
		topBun.classList.remove('burger-burnt')
		filling.classList.add('burger-yum');
		filling.classList.remove('burger-burnt')
		bottomBun.classList.add('burger-yum');
		bottomBun.classList.remove('burger-burnt')
	}
})

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Konami Code  
let konamiPosition = 0; // Set position sequence

document.addEventListener('keydown', (e)=> { // pass through e to function
konamiPosition = (e.keyCode === konamiCode[konamiPosition]) ? konamiPosition + 1 : 0; // Ternary operator (?) was used to either reset konamiposition to 1 or default to 0
if (konamiPosition == konamiCode.length) { // compare position with konamicode length
	let name = prompt("Hello! You're a gamer.. please tell me your name.");
	alert(`Well, hello there ${name}! You've unlocked the Konami Code, nothing has changed on this website, but thank you for finding this easter egg.`);
}
})