
var altura =0 // variaveis global
var largura=0
var vidas = 1
var tempo = 10
var criamosca = 1200
var nivel = window.location.search.replace('?', '')
	if(nivel === 'normal'){
		criamosca = 2000
	}else if(nivel === 'dificil'){
		criamosca = 1500
	}else if (nivel === 'hard' ){
		criamosca = 1000
	}
function ajustaTamanho(){
	//toda vez que a pagina sofrer alterações, as dimensoes serao atualizadas
 altura = window.innerHeight// captura as dimensoes da pagina
 largura = window.innerWidth

 console.log(altura,largura)//teste
}
ajustaTamanho()//chamada da função

var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo <0){
		clearInterval(cronometro)
		clearInterval(criamosca)
		window.location.href = 'vitoria.html'



	}else{
			document.getElementById('crono').innerHTML = tempo
	}

}, 1000)

function posicaoRandomica(){
	// esse bloco de codigo verifica se ja existe um id chamado mosquito
	//caso exista ele remove
	if(document.getElementById('mosquito')){
	document.getElementById('mosquito').remove()
	if(vidas > 3){
window.location.href = 'gameover.html'
	}else{
	document.getElementById('v' + vidas). src = 'imagens/coracao_vazio.png'
	vidas++
	}
}
//variaveis correspondentes ao eixo X e Y para que seja feito o
// posicionamento aleatório dentro da pagina
var posicaoX = Math.floor(Math.random() * largura) - 80
var posicaoY = Math.floor(Math.random() * altura) - 80

	posicaoX = posicaoX<0?0:posicaoX// impede que exista valores menor que 0
	posicaoY = posicaoY<0?0:posicaoY
 
 console.log(posicaoX, posicaoY)
// esse bloco de codigo cria o elemento 
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() +' ' + lados()
mosquito.style.left = posicaoX + "px"
mosquito.style.top = posicaoY + "px"
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
}

document.body.appendChild(mosquito)
	console.log(lados())
}


function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
		switch (classe){
			case 0:
			return 'mosquito1'
			case 1:
			return 'mosquito2'
			case 2:
			return 'mosquito3'
		}
	}
	function lados(){
	var classe = Math.floor(Math.random() * 2)
		switch (classe){
			case 0:
			return 'ladoa'
			case 1:
			return 'ladob'
			
		}
	}