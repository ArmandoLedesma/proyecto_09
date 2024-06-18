/*Diseñar un algoritmo en JavaScript para un almacén de zapatos que tiene una promoción
de descuento para vender al mayor, está dependerá del número de zapatos que se compren. 
El precio de cada zapato debe ser ingresado por pantalla. 
1. Si son menos de 10, no hay ningún descuento
2. Si son más o igual de 10 y menos de 20, se les dará un 10% de descuento sobre el total
de la compra.
3. Si el número de zapatos, es mayor de 20, pero menor de 30, se le otorga un 20% de descuento
4. Y si son más de 30 zapatos, se otorgará un 40% de descuento.*/ 

//Definimos las variables//
function descuento_zapatos (){
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    let sub_total 
    let descuento  
    let total;

    if (cantidad < 10){
        document.getElementById('resultado1').innerHTML =`<div class='alert alert-danger'>No tuvo descuento!</div>`
    } else if (cantidad >= 10 && cantidad < 20){
        sub_total = precio * cantidad 
        descuento= sub_total * 0.10
        total=sub_total-descuento
        document.getElementById('resultado1').innerHTML= `<div class='alert alert-success'>Usted compro ${cantidad} zapatos y el subtotal es: ${sub_total} y tuvo un descuento de ${descuento} y el total es de ${total} </div>`
    } else if (cantidad > 20 && cantidad <30){
        sub_total = precio * cantidad 
        descuento= sub_total * 0.20
        total=sub_total-descuento
        document.getElementById('resultado1').innerHTML= `<div class='alert alert-success'>Usted compro ${cantidad} zapatos y el subtotal es: ${sub_total} y tuvo un descuento de ${descuento} y el total es de ${total} </div>`
    } else if(cantidad > 30) {
        sub_total = precio * cantidad 
        descuento= sub_total * 0.40
        total=sub_total-descuento
        document.getElementById('resultado1').innerHTML= `<div class='alert alert-success'>Usted compro ${cantidad} zapatos y el subtotal es: ${sub_total} y tuvo un descuento de ${descuento} y el total es de ${total} </div>`
    } else {
         document.getElementById('resultado1').innerHTML= `<div class='alert alert-danger'>Ingresó valores incorrectos</div>`
    }
}


/*Diseñar un algoritmo que identifique si una persona es niño, joven, adulto o adulto mayor.
Para lo cual debe leer su edad.
Si la edad es menor o igual a 12 años, el algoritmo debe indicar "Eres un niño"
Si la edad es mayor a 12 años y menor o igual a 40 años, el algoritmo debe indicar "Eres
un joven"
Si la edad es mayor a 40 años y menor o igual a 60 años, el algoritmo debe indicar "Eres
un adulto"
Si la edad es mayor a 60 años el algoritmo debe indicar "Eres un adulto mayor"*/

function edad_promedio (){ //Definimos el nombre de la función//
    const edad = parseInt(document.getElementById('edad').value);
    

    if (edad <= 12){
        document.getElementById('resultado2').innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Eres un niño. </div>"
    } else if (edad >= 13 && edad <18){
        document.getElementById('resultado2').innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Eres un adolecente. </div>"
    } else if (edad >= 18 && edad <= 59){
        document.getElementById('resultado2').innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Eres un adulto. </div>"
    } else if (edad >= 60){
        document.getElementById('resultado2').innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Eres un adulto mayor. </div>"
    } else { //En caso de que el usuario digite un valor incorrecto:
        document.getElementById('resultado2').innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> ¡Error! Asegurese de digitar bien los datos. </div>"
    }
}

//Imc (Ejercicio 3)//
function calcular_imc(){
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);
    

    if (estatura === 0){
        document.getElementById('resultado3').innerHTML = "<div class='alert alert-danger'>La estatura no puede ser cero.</div>";
        return;
    }

    const imc = peso / (estatura * estatura);

    if (imc < 18.5){
        document.getElementById('resultado3').innerHTML = `<div class='alert alert-success'>Su indice de masa corporal indica Bajo Peso, con un valor aproximado de ${imc.toFixed(2)}</div>`;
    } else if(imc >= 18.5 && imc < 24.9) {
        document.getElementById('resultado3').innerHTML = `<div class='alert alert-success'>Su indice de masa corporal indica Normal, con un valor aproximado de ${imc.toFixed(2)}</div>`;
    } else if(imc >= 25 && imc < 29.9){
        document.getElementById('resultado3').innerHTML = `<div class='alert alert-success'>Su indice de masa corporal indica Sobrepeso, con un valor aproximado de ${imc.toFixed(2)}</div>`;
    } else if(imc >= 30 && imc < 34.9){
        document.getElementById('resultado3').innerHTML = `<div class='alert alert-danger'>Su indice de masa corporal indica Obesidad 1, con un valor aproximado de ${imc.toFixed(2)}</div>`;
    } else if(imc >= 35 && imc < 39.9){
        document.getElementById('resultado3').innerHTML = `<div class='alert alert-danger'>Su indice de masa corporal indica Obesidad 2, con un valor aproximado de ${imc.toFixed(2)}</div>`;
    } else if(imc >= 40 && imc < 49.9){
        document.getElementById('resultado3').innerHTML = `<div class='alert alert-danger'>Su indice de masa corporal indica Obesidad 3, con un valor aproximado de ${imc.toFixed(2)}</div>`;
    } else if(imc > 50){
        document.getElementById('resultado3').innerHTML = `<div class='alert alert-danger'>Su indice de masa corporal indica Obesidad 4, con un valor aproximado de ${imc.toFixed(2)}</div>`;    
    } 

    
}

//Presión Arterial (Ejercicio 4)//
function presion_arterial(){
    const pre_a = parseFloat(document.getElementById('pre_a').value);

    if (pre_a === 0){
        document.getElementById('resultado4').innerHTML = `<div class='alert alert-danger'>La presión arterial no puede ser cero.</div>`;
        return;
    }

    if (pre_a < 90){
        document.getElementById('resultado4').innerHTML = `<div class='alert alert-danger'>La presión arterial del paciente es Baja.</div>`;
    } else if (pre_a < 120){
        document.getElementById('resultado4').innerHTML = `<div class='alert alert-danger'>La presión arterial del paciente es Normal.</div>`;
    } else if (pre_a >=120 && pre_a <= 139){
        document.getElementById('resultado4').innerHTML = `<div class='alert alert-danger'>La presión arterial del paciente indica Prehipertensión.</div>`;
    } else if (pre_a >= 140 && pre_a <= 159){
        document.getElementById('resultado4').innerHTML = `<div class='alert alert-danger'>La presión arterial del paciente indica Hipertensión (Alta).</div>`;
    } else if (pre_a >= 160){
        document.getElementById('resultado4').innerHTML = `<div class='alert alert-danger'>La presión arterial del paciente indica Hipertensión Fase 2 (Alta).</div>`;
    }
}



