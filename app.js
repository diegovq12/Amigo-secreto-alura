// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){
    const amigoNuevo = document.getElementById('amigo');
    if(amigoNuevo.value.trim() === ''){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(amigoNuevo.value.trim());
        console.log(amigos);
        mostrarAmigos();
    }
    amigoNuevo.value = '';
}

const mostrarAmigos= ()=>{
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i=0;i<amigos.length;i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

}

const sortearAmigo = ()=>{
    if(amigos.length === 0){
        alert('No hay amigos en la lista, por favor agrega algun amigo!')
    }else{
        const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)]
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Tu amigo secreto es ${amigoSeleccionado}!`;
        console.log(`Amigo seleccionado ${amigoSeleccionado}`);
    }
}
