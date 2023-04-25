var url = ('https://digimon-api.vercel.app/api/digimon')
var tabla = document.getElementById('tabla')
var ind = 1
var digiDatos = []

function listado(){
    document.getElementById('lista').classList.remove('d-none')
}


fetch(url)
    .then(response => response.json())
    .then(digimon => {
        console.log(digimon)
        /* Inserto los datos de la api en una variable */
        digiDatos.push(digimon)
        /* Recorro los datos de la api */
            for (digi of digimon){
                /* condicional para mostrar sólo los primeros 10 digimon */
                if (ind === 13){
                    break
                }
                /* Inserto elemento html tabla con los datos correspondientes */
                tabla.innerHTML += `<tr id="ver" onclick="ver(this)">
                                        <td>${ind}</td>
                                        <td>${digi.name}</td>
                                    </tr>`
                /* Suma 1 por cda vuelta de ciclo */
                ind++;
            }                            
}).catch(error => console.log(error))



/* Funcion que me permite ver el digimon seleccionado y despliega la carta con la imagen y características */
function ver(fila){
    /* hago coincidir el índice de los datos de la api y el indice de la tabla con la fila seleccionada */
    var digimon = digiDatos[0][fila.rowIndex - 1]
    /* remuevo clase para mostrar la carta con los datos del digimon */
    document.getElementById('carta').classList.remove('d-none')
    /* Insertamos los datos en la sección html correspondiente */
    document.getElementById('img').src = digimon.img
    document.getElementById('name').textContent = `Nombre: ${digimon.name}`
    document.getElementById('level').textContent = `Nivel: ${digimon.level}`
}


