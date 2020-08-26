const navSlider= () =>{
    'use strict';
	const burger=document.querySelector('#burger');
	
	const nav=document.querySelector('.container1 ul');
	
	burger.addEventListener('click',() =>{
		nav.classList.toggle('UL2');
	});
};

navSlider();


const BurgerIcon= () =>{
    'use strict';
	const span=document.querySelector('#burger');
	
	const line=document.querySelector('#burger');
	
	span.addEventListener('click',() =>{
		line.classList.toggle('burger3');
	});
};

BurgerIcon();


