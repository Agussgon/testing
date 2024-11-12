function suma(a,b){

    let parametro1= parseFloat(a)
    let parametro2=parseInt(b)
    let resultado= null;

    if( isNaN(parametro1)  || isNaN(parametro2)  ){
        throw new Error('parámetros inválidos')
    }
    else{
          resultado= parametro1 + parametro2}
    
    return resultado 
}


function resta(a,b){
    

}
 
module.exports= {suma,resta};  
 