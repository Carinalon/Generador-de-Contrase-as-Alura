let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*@-';


function  generar(){
    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado < 8 ){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
    //let i inicializador:donde quiero que empiece- i<: condicion que se debe cumplir.
   // ejecutar esto mientras que el numero sea menor al ingresado. i++: incrementar en cada paso (contador).

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }
    contrasena.value= password;  
}



//function limpiar(){
//    document.getElementById('cantidad').value = '';
//    document.getElementById('contrasena').value = '';
//}












