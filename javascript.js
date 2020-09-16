function toggle() { /** Target navigation -- open and close it when menu button is clicked **/
	const nav = document.querySelector('.nav');
	const burgerContainer = document.querySelector('.burger-container');
	const blurMain = document.querySelector('main');
	const navContainer = document.querySelector('.intro-container');
	
	if (nav.classList.contains('hide')) {
		nav.classList.remove('hide') & burgerContainer.classList.add('sliding-menu-button') & blurMain.classList.add('mainblur') & navContainer.classList.add('mainblur');
	  } else {
		nav.classList.add('hide') & burgerContainer.classList.remove('sliding-menu-button') & blurMain.classList.remove('mainblur') & navContainer.classList.remove('mainblur');
	  }
  }

  function hyperlinkToggle() { /** Target navigation and close the menu when a hyperlink is selected **/
	const nav = document.querySelector('.nav');
	const blurMain = document.querySelector('main');
	const navContainer = document.querySelector('.intro-container');
	
	if (nav.classList.contains('hide')) {
		nav.classList.remove('hide');
	  } else {
		nav.classList.add('hide') & blurMain.classList.remove('mainblur') & navContainer.classList.remove('mainblur');
	  }
  }


const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Konami Code  
let konamiPosition = 0; // Set position sequence

document.addEventListener('keydown', (e)=> { // pass through e to function
konamiPosition =  (e.keyCode === konamiCode[konamiPosition]) ? konamiPosition + 1 : 0; 
if (konamiPosition == konamiCode.length) { // compare position with konamicode length
	let name = prompt("Hello! You're a gamer.. please tell me your name.");
	alert(`Well, hello there ${name}! You've unlocked the Konami Code, nothing has changed on this website, but thank you for finding this easter egg.`);
}
})