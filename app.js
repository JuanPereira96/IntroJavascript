var i = 10;
var nombre = 'Oscar';

var f = function (){
	alert('Saludar');
}


var app = {
	contar : function(){
		for (var i=0; i<100; i++){
			alert('Contador'+i);
		};
	},
	par:function(num){
		if(num%2==0){
			alert(num+'es par');
		}else{
			alert(num+'es impar');
		}
	},
	ciclo:function(){
		for (var i = 1; i >= 10; i++) {
			if (i%2 == 0) {
				alert(i + ' es par');
			}else{
				alert(i + ' es impar');
			}
		}
	}
}


app.ciclo();