const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var dcwidth = document.body.offsetWidth;
$(".page_1").style.transform = `translateZ(${dcwidth/2}px)`;
$(".page_2").style.transform = `rotateY(-90deg) translateZ(${dcwidth/2}px)`;
$(".page_3").style.transform = `rotateY(-180deg) translateZ(${dcwidth/2}px)`;
$(".page_4").style.transform = `rotateY(-270deg) translateZ(${dcwidth/2}px)`;
document.body.onresize = (()=>{
	dcwidth = document.body.offsetWidth;
	$(".page_1").style.transform = `translateZ(${dcwidth/2}px)`;
	$(".page_2").style.transform = `rotateY(-90deg) translateZ(${dcwidth/2}px)`;
	$(".page_3").style.transform = `rotateY(-180deg) translateZ(${dcwidth/2}px)`;
	$(".page_4").style.transform = `rotateY(-270deg) translateZ(${dcwidth/2}px)`;
})

for (let i=0;i<$$('.page1').length;i++) {
	$$('.page1')[i].onclick = (()=>{
	 	$(".main").style.transform = 'rotateY(0deg)';
	 	$$("span")[0].classList.add('active');
	 	for (let i=0;i<$$('span').length;i++) {
	 		if (i!=0) {
	 			$$("span")[i].classList.remove('active');
	 		}
	 	}
	})
}
for (let i=0;i<$$('.page2').length;i++) {
	$$('.page2')[i].onclick = (()=>{
	 	$(".main").style.transform = 'rotateY(90deg)';
	 	$$("span")[5].classList.add('active');
	 	for (let i=0;i<$$('span').length;i++) {
	 		if (i!=5) {
	 			$$("span")[i].classList.remove('active');
	 		}
	 	}
	})
}
for (let i=0;i<$$('.page3').length;i++) {
	$$('.page3')[i].onclick = (()=>{
	 	$(".main").style.transform = 'rotateY(180deg)';
	 	$$("span")[10].classList.add('active');
	 	for (let i=0;i<$$('span').length;i++) {
	 		if (i!=10) {
	 			$$("span")[i].classList.remove('active');
	 		}
	 	}
	})
}
for (let i=0;i<$$('.page4').length;i++) {
	$$('.page4')[i].onclick = (()=>{
	 	$(".main").style.transform = 'rotateY(270deg)';
	 	$$("span")[15].classList.add('active');
	 	for (let i=0;i<$$('span').length;i++) {
	 		if (i!=15) {
	 			$$("span")[i].classList.remove('active');
	 		}
	 	}
	})
}

