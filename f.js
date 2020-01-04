var randomNum = Math.floor(Math.random() * 100);
	var countStep = 10;
	
	function checkAnswer(){

		var info;
		var answer = document.getElementById('answer');
		if(!(countStep)){
			alert('Попытки закончены, вы проиграли! Страница будет перезагружена.');
			location.reload(); // перезагрузка страницы
		}
		if( answer.value ==  randomNum){
			info = 'Поздравляем! Вы угадали число!';
			document.getElementById('send').style.display = 'none';
		}else if(  answer.value<  randomNum ){
			countStep--;
			info = "число Больше";
		}else if(answer.value > randomNum ){
			countStep--;
			info = "число Меньше";
		}
		
		document.getElementById('info').innerHTML += '<p>#' + countStep+ ' Вы ответили: ' + answer.value + ' - ' + info + '</p>';
		answer.value = '';
		
	}
