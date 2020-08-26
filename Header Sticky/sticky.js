const Scroll=()=>{
    'use strict';
	window.addEventListener("scroll",()=>{
		var header=document.querySelector("header");
		header.classList.toggle("sticky",window.scrollY>0)
	});
};
Scroll();



const Burger=()=>{
    'use strict';
	window.addEventListener("scroll",()=>{
		var burger=document.querySelector("#burger");
		burger.classList.toggle("burger2",window.scrollY>0)
	});
};
Burger();


const LogoIcon=()=>{
    'use strict';
	window.addEventListener("scroll",()=>{
		var LogoIcon1=document.querySelector("#LogoIcon");
		LogoIcon1.classList.toggle("LogoIcon3",window.scrollY>0)
	});
};
LogoIcon();




const Logo=()=>{
    'use strict';
	window.addEventListener("scroll",()=>{
		var Logo1=document.querySelector(".container1 #Logo");
		Logo1.classList.toggle("logo2",window.scrollY>0)
	});
};
Logo();















