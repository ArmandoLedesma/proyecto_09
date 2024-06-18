document.getElementById('form_PesoIdeal').addEventListener('submit', function(event) {
    event.preventDefault();

    const sexo = String(document.getElementById('sexo').value);
    const edad = parseInt(document.getElementById('edad').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual').value);
    let estatura = parseFloat(document.getElementById('estatura').value);

    let pesoIdeal, imc, examinacion;

    if (sexo === 'hombre') {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
    } else if (sexo === 'mujer') {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
    } else {
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Por favor seleccione su sexo.</div>';
        return;
    }

    estatura = estatura / 100; // Convertir estatura a metros
    imc = pesoActual / (estatura * estatura);

    switch (true) {
        case (imc < 18.5):
            examinacion = '<span class="badge text-bg-warning">Bajo peso</span>';
            break;
        case (imc >= 18.5 && imc < 24.9):
            examinacion = '<span class="badge text-bg-success">Peso normal</span>';
            break;
        case (imc >= 25 && imc < 29.9):
            examinacion = '<span class="badge text-bg-warning">Sobrepeso</span>';
            break;
        case (imc >= 30 && imc < 34.9):
            examinacion = '<span class="badge text-bg-danger">Obesidad grado 1</span>';
            break;
        case (imc >= 35.0 && imc < 39.9):
            examinacion = '<span class="badge text-bg-danger">Obesidad grado 2</span>';
            break;
        case (imc >= 40.0):
            examinacion = '<span class="badge text-bg-danger">Obesidad grado 3</span>';
            break;
        default:
            examinacion = 'Valores de IMC no examinados';
    }

    document.getElementById('resultado').innerHTML =
        `<div class="alert alert-secondary" role="alert">
            <strong>Resultado:</strong><br>
            Edad: ${edad} años<br>
            Peso Actual: ${pesoActual} kg<br>
            Estatura: ${estatura * 100} cm<br>
            IMC: ${imc.toFixed(1)} tiene ${examinacion}<br>
            Peso Ideal: <span class="badge text-bg-info">${pesoIdeal.toFixed(1)}</span><br>
            Deberías perder: <span class="badge text-bg-dark">${(pesoActual - pesoIdeal).toFixed(1)}</span> kg
        </div>`;
});