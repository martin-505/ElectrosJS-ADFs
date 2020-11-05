const { BrowserWindow, dialog } = require('electron').remote;
const path = require('path');

//cramos el boton para verificar el automata
const button = document.getElementById('verificar');
const automata = {
    estadoInicial: 0,
    estadoFinal: 5,
    transiciones: [{
            //Status 0
            estado: 0,
            simbolo: 0,
            al_estado: 1
        },
        {
            estado: 0,
            simbolo: 1,
            al_estado: 5
        },
        {
            estado: 0,
            simbolo: 2,
            al_estado: 5
        },
        //Status 1
        {
            estado: 1,
            simbolo: 0,
            al_estado: 5
        },
        {
            estado: 1,
            simbolo: 1,
            al_estado: 5
        },
        {
            estado: 1,
            simbolo: 2,
            al_estado: 2
        },
        //Status 2
        {
            estado: 2,
            simbolo: 0,
            al_estado: 3
        },
        {
            estado: 2,
            simbolo: 1,
            al_estado: 2
        },
        {
            estado: 2,
            simbolo: 2,
            al_estado: 2
        },
        //Status 3
        {
            estado: 3,
            simbolo: 0,
            al_estado: 3
        },
        {
            estado: 3,
            simbolo: 1,
            al_estado: 4
        },
        {
            estado: 3,
            simbolo: 2,
            al_estado: 2
        },
        //Status 4
        {
            estado: 4,
            simbolo: 0,
            al_estado: 3
        },
        {
            estado: 4,
            simbolo: 1,
            al_estado: 2
        },
        {
            estado: 4,
            simbolo: 2,
            al_estado: 2
        },
        //Status 5
        {
            estado: 5,
            simbolo: 0,
            al_estado: 5
        },
        {
            estado: 5,
            simbolo: 1,
            al_estado: 5
        },
        {
            estado: 5,
            simbolo: 2,
            al_estado: 5
        }
    ]
};

button.addEventListener("click", (event) => {
    let cadena = document.getElementById('txtCadena').value;
    let estadoActual = automata.estadoInicial;
    let error = false;

    cadena.split('').forEach(simbolo => {
        console.log(simbolo);
        let encuentraTransicion = false;

        automata.transiciones.forEach(transicion => {
            if (transicion.estado == estadoActual && transicion.simbolo == simbolo) {
                estadoActual = transicion.al_estado;
                encuentraTransicion = true;
                return;
            }
        });

        if (!encuentraTransicion) {
            error = true;
            dialog.showErrorBox('Error', 'La cadena no es válida');
            return;
        }

    });

    if (!error && automata.estadoFinal == estadoActual) {

        let options = {
            buttons: ["Aceptar"],
            message: "Cadena correcta"
        }
        dialog.showMessageBox(options);
    }
});
//especie de bsuqueda para ver si esta el estado actual que manejo, si el estado actual esta en el array de estados finales