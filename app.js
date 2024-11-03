const boton= document.getElementById('button');
const opcionVisualizar= document.getElementById('visualizarPlayas');


console.log(boton); 

//Element.classList devuelve una colección activa de DOMTokenList (en-US) de los atributos de clase del elemento.
boton.addEventListener('click', function () {

    document.querySelector('body').classList.toggle('dark')
  
  }
    );

opcionVisualizar.addEventListener('click',function(){
  renderizandoArray(playas);

} )    

//
const playas= [
    {
        title: 'Playa del Carmen',
        imgUrl: './imagenes/carmen.webp',
        description: 'Playa del Carmen es un balneario costero de México que se ubica a lo largo de la costa caribeña de la Riviera Maya, en la Península de Yucatán.Pertenece al estado de Quintana Roo y es famosa por sus playas bordeadas de palmeras y los arrecifes de coral. La Quinta Avenida peatonal se extiende en paralelo a la playa, con cuadras de tiendas, restaurantes y clubes nocturnos que van desde bares relajados hasta clubes de baile. ',
        createdAt: ''
      },
      {
        title: 'Rio de Janeiro',
        imgUrl: './imagenes/rio.jpg',
       // description: 'Río de Janeiro es una enorme ciudad costera de Brasil, famosa por sus playas de Copacabana e Ipanema, la estatua del Cristo Redentor de 38 m de alto sobre el cerro del Corcovado y el morro Pan de Azúcar, una cima de granito con teleféricos que ascienden a su cima. La ciudad también es conocida por sus extensas favelas. El estridente festival del Carnaval, con desfiles de carros alegóricos, extravagantes disfraces y bailarines de samba, es considerado el más grande del mundo. ',
        createdAt: ''
      },
      {
        title: 'Puerto Madryn',
        imgUrl: './imagenes/puertoMadryn.jpg',
        description: 'Dentro de la provincia de Chubut, se encuentra uno de los destinos turísticos más destacados de Argentina: Puerto Madryn. Lo que convierte a la localidad un sitio único de visitar es su oferta hotelera y las múltiples actividades turísticas, las cuales se caracterizan por el contacto directo con la naturaleza. Entre ellas se encuentran: el avistaje de ballenas, delfines, pingüinos y elefantes marinos. Durante los meses de verano, las playas son perfectas para realizar deportes náuticos como kayak, windsurf, moto-esquí, kitesurf y canotaje. ',
        createdAt: ''
      },
      {
        title: 'Playa Turquesa',
        imgUrl: './imagenes/turquesa.avif',
        description: 'Playa Turquesa es la laguna más visitada y la que tiene más espacio para recreación, siendo que cuenta con unos 100 metros para nadar tranquilo con el agua a la cintura y después empieza la profundidad. Esta península se llama Yuco, y está conformada por varias bahías. Está ubicada sobre el lago Lácar, con playas de arena ideales para balneario y un alucinante entorno.',
        createdAt: ''
      },
      {
        title: 'Playa del Carmen',
        imgUrl: './imagenes/carmen.webp',
        description: 'Playa del Carmen es un balneario costero de México que se ubica a lo largo de la costa caribeña de la Riviera Maya, en la Península de Yucatán.Pertenece al estado de Quintana Roo y es famosa por sus playas bordeadas de palmeras y los arrecifes de coral. La Quinta Avenida peatonal se extiende en paralelo a la playa, con cuadras de tiendas, restaurantes y clubes nocturnos que van desde bares relajados hasta clubes de baile. ',
        createdAt: ''
      },
      {
        title: 'Puerto Madryn',
        imgUrl: './imagenes/puertoMadryn.jg',
        description: 'Dentro de la provincia de Chubut, se encuentra uno de los destinos turísticos más destacados de Argentina: Puerto Madryn. Lo que convierte a la localidad un sitio único de visitar es su oferta hotelera y las múltiples actividades turísticas, las cuales se caracterizan por el contacto directo con la naturaleza. Entre ellas se encuentran: el avistaje de ballenas, delfines, pingüinos y elefantes marinos. Durante los meses de verano, las playas son perfectas para realizar deportes náuticos como kayak, windsurf, moto-esquí, kitesurf y canotaje. ',
        createdAt: ''
      },

]; 
//

function renderizandoArray(array){
  
    let body=document.querySelector('body .contenedor');

    array.forEach(element => {
        
        const playa= `<div class="item">
        <img src=${element.imgUrl}>
        <h2>${element.title}</h2>
        <p>
        ${element.description}
        </p>
        </div> `
        body.innerHTML += playa;
    
    });
}

//




let infoNueva={
  titulo:'Bienvenidos',
  descr:'esto es un breve ejemplo sobre renderizado'
}

//más

function incluyeInfo(info){
  const templateString=`<div>
  <h1>${info.titulo}</h1>
  <p>${info.descr}</p>
  </div>`
  document.getElementById("contenedor-distinto").innerHTML += templateString
}

incluyeInfo(infoNueva); 