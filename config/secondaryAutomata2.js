const { BrowserWindow, dialog } = require('electron').remote;
const path = require('path');

//cramos el boton para verificar el automata
const button2 = document.getElementById('verificar2');
const automata2 = {
    estadoInicial: 0,
    estadoFinal: [0, 1, 2, 3, 4],
    transiciones: [{
            estado: 0,
            simbolo: 0,
            al_estado: 1
        },
        {
            estado: 0,
            simbolo: 1,
            al_estado: 3
        },
        {
            estado: 0,
            simbolo: 2,
            al_estado: 3
        },
        {
            estado: 1,
            simbolo: 0,
            al_estado: 4
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
        {
            estado: 2,
            simbolo: 0,
            al_estado: 2
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
        {
            estado: 3,
            simbolo: 0,
            al_estado: 4
        },
        {
            estado: 3,
            simbolo: 1,
            al_estado: 3
        },
        {
            estado: 3,
            simbolo: 2,
            al_estado: 3
        },
        {
            estado: 4,
            simbolo: 0,
            al_estado: 4
        },
        {
            estado: 4,
            simbolo: 1,
            al_estado: 5
        },
        {
            estado: 4,
            simbolo: 2,
            al_estado: 3
        },
        {
            estado: 5,
            simbolo: 0,
            al_estado: 4
        },
        {
            estado: 5,
            simbolo: 1,
            al_estado: 3
        },
        {
            estado: 5,
            simbolo: 2,
            al_estado: 3
        }
    ]
};

button2.addEventListener("click", (event) => {
    let cadena = document.getElementById('txtCadena2').value;
    let estadoActual = automata2.estadoInicial;
    let error = false;

    cadena.split('').forEach(simbolo => {
        console.log(simbolo);
        let encuentraTransicion = false;

        automata2.transiciones.forEach(transicion => {
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

    if (!error && automata2.estadoFinal.includes(estadoActual)) {

        let options = {
            buttons: ["Aceptar"],
            message: "Cadena correcta"
        }
        dialog.showMessageBox(options);
    }
});