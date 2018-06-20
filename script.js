const quadradinhos = document.querySelectorAll(".quadradinho");
//const cores = ["blue", "yellow", "red"];

/*function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
*/

function encerrar(){
    for(let quadradinho of quadradinhos){
        quadradinho.classList.add("escondido");
    }
    document.querySelector("h1").classList.remove("escondido");
}

function verificarFim(){
    let cor1 = quadradinhos[0].style.backgroundColor;
    let cor2 = quadradinhos[1].style.backgroundColor;
    let cor3 = quadradinhos[2].style.backgroundColor;

    if(cor1 === cor2 && ){
        for(let quadradinho of quadradinhos){
            quadradinho.onclick = null;
    }

        setTimeout(encerrar, 2000);
    }
}

function trocarCor(){
    let cor = aleatorio(0,3);
    this.style.backgroundColor = cores[cor];

    verificarFim();
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = trocarCor;
}