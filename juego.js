let minutos = 1;
let segundos = 59;
var contador = 1;
var contador2 = 0;
cargarSegundos();

//Se definen los segundos

function cargarSegundos(){
    let txtSegundos;
    if(segundos < 0){
        segundos=59;
    }
    
    //Mostramos los segundos

    if (segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
        txtSegundos = segundos; 
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos --;

    cargarMiutos(segundos);
}


//Se definen los minutos

function cargarMiutos(segundos){
    let txtMinutos;
    if(segundos == -1 && minutos !== 0){
        setTimeout(() =>{
            minutos = 0;
            
            
        },500)
    }else if(segundos == -1 && minutos == 0){
        setTimeout(() =>{
            minutos = 1;    
        },500)
    }
    //Se muestran los minutos
    if(minutos > 10){
        txtMinutos = `0${minutos}`;
    }else{
        txtMinutos = minutos;
        
    }
     
    document.getElementById('minutos').innerHTML = txtMinutos;

    
    
    
}



//Se ejecutan cada segundo
setInterval(cargarSegundos,1000);



window.onload = function(){
    document.getElementById('vRes').addEventListener('click',function(){
        let color = generarcoloraleatorio();
        document.getElementById('c1').style.backgroundColor = color;
    });
}

function generarcoloraleatorio(){
    var rojo= Math.floor(Math.random()*256);
    var verde= Math.floor(Math.random()*256);
    var azul= Math.floor(Math.random()*256);
    return `rgb(${rojo}, ${verde}, ${azul})`;   
}

window.onload = function(){
    document.getElementById('vRes2').addEventListener('click',function(){
        let c = generarcoloraleatorio1();
        document.getElementById('c2').style.backgroundColor = c;
    });
}

function generarcoloraleatorio1(){
    var r= Math.floor(Math.random()*256);
    var v= Math.floor(Math.random()*256);
    var a= Math.floor(Math.random()*256);
    return `rgb(${r}, ${v}, ${a})`; 
}






