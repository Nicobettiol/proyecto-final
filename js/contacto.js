$('#registrar').append(`<form id="forReg">
<p>Dejanos tu Pregunta y te responderemos a la Brevedad</p>
<input id="inpNom" type="text" placeholder="Nombre">
<input id="inpApe" type="text" placeholder="Apellido"></input>
<input id="inpMai" type="text" placeholder="juan@mail.com" requerid></input>
<textarea name="" id="" cols="30" rows="10"></textarea>
<button id="btnForm" class="btn btn-primary">registrarse</button>
</form>
<h2 id="respuesta"></h2>
`

)


$('#forReg').submit((e) => {

    
    
    const nombre = $('#inpNom').val()
    const apellido = $('#inpApe').val()
    const mail = $('#inpMai').val()


    if (nombre.length > 3 && apellido.length>3) {
        $('#respuesta').append('Usuario Registrado')
        $('#respuesta').addClass('valido')
        $('#inpNom').val('')
        $('#inpApe').val('')
        $('#inpMai').val('')
    } else {
        $('#respuesta').append('Usuario Incorrecto')
        $('#respuesta').addClass('invalido')
    }


})

$('#inpNom').on('input', () => {
    const valNom = $('#inpNom').val()
    if (valNom.length <= 3) {
        $('#inpNom').addClass('invalido')
        $('#inpNom').removeClass('valido')
    } else {
        $('#inpNom').addClass('valido')
        $('#inpNom').removeClass('invalido')
    }
})

$('#inpApe').on('input', () => {
    const valApe = $('#inpApe').val().trim()
    if (valApe.length <= 3) {
        $('#inpApe').addClass('invalido')
        $('#inpApe').removeClass('valido')
    } else {
        $('#inpApe').addClass('valido')
        $('#inpApe').removeClass('invalido')
    }
})
