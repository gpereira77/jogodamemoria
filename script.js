// const quadradinhos = document.querySelectorAll(".quadradinho");
// const cores = ["blue", "yellow", "red"];

// function aleatorio(min, max){
//     return Math.floor(Math.random() * (max-min+1)) + min;
// }


// function encerrar(){
//     for(let quadradinho of quadradinhos){
//         quadradinho.classList.add("escondido");
//     }
//     document.querySelector("h1").classList.remove("escondido");
// }

// function verificarFim(){
//     let cor1 = quadradinhos[0].style.backgroundColor;
//     let cor2 = quadradinhos[1].style.backgroundColor;
//     let cor3 = quadradinhos[2].style.backgroundColor;

//     if(cor1 === cor2 && ){
//         for(let quadradinho of quadradinhos){
//             quadradinho.onclick = null;
//     }

//          tTimeout(encerrar, 2000);
//     }
// }

// function trocarCor(){
//     let cor = aleatorio(0,3);
//     this.style.backgroundColor = cores[cor];

//     verificarFim();
// }

// for(let quadradinho of quadradinhos){
//     quadradinho.onclick = trocarCor;
// }

const quadradinhos = document.querySelectorAll(".quadradinho");
const cores = ["blue", "red", "green", "blue", "red", "green" ];

//Função para trocar de cor, após clique

function escolherCor(){
console.log("entreinafuncaoescolherCor");
let cor = "";
    
    for (i=0;i<=cores.length;i++){
        validaCor = this.classList.contains(i);
        console.log(validaCor);
        if(validaCor){
            cor = i;
        }
    }    
    this.style.backgroundColor = cores[cor];

}

//Quando clicar no quadradinho


for(let quadradinho of quadradinhos){
     quadradinho.onclick = escolherCor;
 }

//    quadradinho.onmousemove{
       
//     function trocarCor(cores = [quadradinho])
       
//    }
