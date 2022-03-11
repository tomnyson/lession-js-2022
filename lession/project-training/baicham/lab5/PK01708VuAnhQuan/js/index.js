var passwords = ['HACKCAILON', 'QUANDANGYEU', 'HACKERNHUCAC', 'THANGSUCVAT', 'DITMEMAY', 'TEAMOBI.CF', 'DIIAHOTAO', 'ILOVEYOUQUAN', 'THANGNGU', 'OCCHOVL', 'TINNGUOIVL'];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;
	
var interval = setInterval(function(){
		for(i = 0; i < counter; i++) {
			characters[i] = password.charAt(i);
		}
		for(i = counter; i < password.length; i++) {
			characters[i] = Math.random().toString(36).charAt(2);
		}
		$('.password').text(characters.join(''));
	}, 25);
	

function hack() {
	counter++;
	if(counter == password.length){
		$('.granted, .rerun').removeClass('hidden');
	}
}
$(window).on('keydown', hack);
$('.password').on('click', hack);


$('.rerun').on('click', function() {
	//cái khúc này là nó đéo cho phép hiển thị cùng một mật khẩu hai lần liên tiếp để bọn mày ăn chửi sml
	indexOld = index; 
	do {
		index = Math.floor((Math.random() * passwords.length));
	} while(index == indexOld);
	
	$('.granted, .rerun').addClass('hidden');
	password = passwords[index];
	characters = [];
	counter = 0;
});
$('.start').on('click', function() {
	$(this).addClass('hidden');
	$('.info p:last-child, .password').removeClass('hidden');
});