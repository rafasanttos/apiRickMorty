const div = document.getElementById('imagem-personagem');
const image = document.getElementById('image');
const numero = document.getElementById('valorInput');

const btn = document.getElementById('btn-ver');

btn.addEventListener('click',filmes);

async function filmes (){
    const valueNumero = numero.value;

    




    if(valueNumero!=='' && valueNumero>0){
        const unviw = document.querySelector('.container');
        unviw.classList.add("mostrar");
    
    const url = await fetch(`https://rickandmortyapi.com/api/character/${valueNumero}/`);
    const dadosJson = await url.json();
    console.log(dadosJson);
    
    div.innerHTML=`
    <h1 class="name">${dadosJson.name}</h1>
    <img class="imagens" src="${dadosJson.image}">
    <p class="especie">${dadosJson.species}</p>
    <p class="status">${dadosJson.status}</p>
    
    `   
       
    }else{
        alert("Por favor insira um número maior que 0")
    }
    
}



// filmes();