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
