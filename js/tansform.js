var cl = {};

cl.addTransition = function(obj){
	obj.style.transition = 'all 0.5s';
	obj.style.webkitTransition = 'all 0.5s';
	
}

cl.setTransform = function(obj,target){
	obj.style.transform = 'translateX('+target+'px)';
	obj.style.webkitTransform = 'webkitTranslateX('+target+'px)';
}

cl.removeTransition = function(obj){
	obj.style.transition = '';
	obj.style.webkitTransition = '';
	
}

cl.addTransitionend = function(obj,fn){
	obj.addEventListener('transitionend',fn);
	obj.addEventListener('webkitTransitionend',fn);
}
