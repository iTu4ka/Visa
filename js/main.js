


let choose_date = document.getElementById('dates')
let hidden_list = document.getElementById('hidden_list');

let burger = document.getElementById('burger');
let hidden_list_menu = document.getElementById('hidden_list_menu');
let close = document.getElementById('close');

choose_date.addEventListener('click', function(e) {
	e.preventDefault();
	if(hidden_list.classList.contains('hidden')){
    	hidden_list.classList.remove('hidden');
	}else{
		hidden_list.classList.add('hidden');
	}
});


burger.addEventListener('click', function(e) {
	e.preventDefault();
	if(hidden_list_menu.classList.contains('hidden')){
    	hidden_list_menu.classList.remove('hidden');
    	close.classList.remove('hidden');
    	burger.classList.add('hidden');
	}else{
		hidden_list_menu.classList.add('hidden');
		burger.classList.remove('hidden');
	}
});

close.addEventListener('click', function(e) {
	e.preventDefault();
	
    	hidden_list_menu.classList.add('hidden');
    	close.classList.add('hidden');
    	burger.classList.remove('hidden');
	
	
});
