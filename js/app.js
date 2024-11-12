const boton= document.getElementById('button');
const opcionVisualizar= document.getElementById('visualizarPersonaje');
const calculadora=document.getElementById('calculadora'); 
const urlPersonaje = 'https://rickandmortyapi.com/api/character/'+numeroAzar();

 
//Element.classList devuelve una colección activa de DOMTokenList (en-US) de los atributos de clase del elemento.
boton.addEventListener('click', function () {

    document.querySelector('body').classList.toggle('dark')
  
  }
    );

opcionVisualizar.addEventListener('click',function(){

const options = {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json', 
  }
};

// Realizar la solicitud fetch
fetch(urlPersonaje, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data);
    renderizandoPersonaje(data);
  })
  .catch(error => {
    console.error('Error: ', error);
  });
  
  opcionVisualizar.disabled=true; 
  calculadora.disabled=false; 
} )    

//

function renderizandoPersonaje(personaje){
  
    let body=document.querySelector('body .contenedor');
      
        const personajeTemplate= `<div class="item">
        <img src=${personaje.image}>
        <h2>${personaje.name}</h2>
        <p>
        ${personaje.species}  ${personaje.status} 
        </p>
        </div> `
        body.innerHTML += personajeTemplate;
    
    };

 function numeroAzar(){ 
  return Math.floor(Math.random()*500) + 1;}

