
window.onload = function(e){
	init();
}

function init(){
    document.querySelector('.movingDiv').addEventListener('click',toggleColor);
}

function toggleColor(e){
	console.log(e);
	
	e.target.classList.toggle('changedDiv')
			
}