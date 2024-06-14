const verificar = (id) => {
    const input = document.getElementById(id)
    const div = document.getElementById('e-' + id)
    input.classList.remove('is-invalid')
    if (input.value.trim() == '') {
        input.classList.add('is-invalid')
        div.innerHTML = '<span class="badge bg-danger">El campo es obligatorio.</span>'
    }
    
    else {
        input.classList.add('is-valid')
        div.innerHTML = ''
        if (id == 'fecha') {
            const dia = validarFecha(input.value)
            if (dia < 1) {
                input.classList.add('is-invalid')
                div.innerHTML = '<span class="badge bg-danger">La fecha seleccionada no es valida</span>'
            }
        }

if (id == 'temporadas') {
        if (input.value < 1) {
            input.classList.add('is-invalid')
            div.innerHTML = '<span class="badge bg-danger">El número de temporadas no puede ser menor a 1</span>'
        }
    }
}
}

const limpiar = () => {
    //document.getElementById('run').value = ''
    document.querySelector('form').reset()
    document.querySelectorAll('.form-control, .form-select').forEach(item => {
        item.classList.remove('is-invalid')
        item.classList.remove('is-valid')
        document.getElementById('e-' + item.name).innerHTML = ''
    })
    //run y botón a sus estados originales
    document.getElementById('run').readOnly = false
    document.getElementById('btnSave').value = 'Guardar'
    btn.addEventListener('click', () => {
        Swal.fire({
            title: "¿Borrar registro?",
            text: "Está acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                //invocar a la función que permite eliminar un documento según su id
                remove(btn.id)
                Swal.fire({
                    title: "Registro eliminado",
                    text: "El registro ha sido eliminado correctamente",
                    icon: "success"
                })
            }
        })
    })
}

const soloNumeros = (e) => {
    //e.keyCode es el número de la tecla (48 al 57 son valores númericos 0 al 9)
    if (e.keyCode >= 48 && e.keyCode <= 57)
        //return true mostrará la tecla en el input
        return true
    //return false no mostrará la tecla en el input
    return false
}

const validarFecha = (fecha) => {
    const hoy = new Date()
    fecha = new Date(fecha)
    const resta = hoy - fecha
    const dia = resta / (1000 * 60 * 60 * 24)

    return dia.toFixed(0)
}