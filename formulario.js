const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}

const campos = {
    nombre: false,
    correo: false,
    asunto: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'name':
            if(expresiones.nombre.test(e.target.value)){

                document.getElementById('group__name').classList.remove('group-form-incorrect');
                document.getElementById('group__name').classList.add('group-form-correct');
                campos['name'] = true
               
            }else{
                document.getElementById('group__name').classList.add('group-form-incorrect'); 
                campos['name'] = false
            }  
        break;

        case 'email':
            if(expresiones.correo.test(e.target.value)){

                document.getElementById('group__email').classList.remove('group-form-incorrect');
                document.getElementById('group__email').classList.add('group-form-correct');
                campos['email'] = true
               
            }else{
                document.getElementById('group__email').classList.add('group-form-incorrect'); 
                campos['email'] = false
            }    
        break;

        case 'subject':
            if(expresiones.asunto.test(e.target.value)){

                document.getElementById('group__subject').classList.remove('group-form-incorrect');
                document.getElementById('group__subject').classList.add('group-form-correct');
                campos['subject'] = true
                
               
            }else{
                document.getElementById('group__subject').classList.add('group-form-incorrect'); 
                campos['subject'] = false
            }  
        break;
    }
}

/*const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){

        document.getElementById('group-form', campo).classList.remove('group-form-incorrect');
        document.getElementById('group-form', campo).classList.add('group-form-correct');
        
       
    }else{
        document.getElementById('group-form', campo).classList.add('group-form-incorrect'); 
    }
}*/

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.name && campos.email && campos.subject){
        formulario.reset();

        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
        setTimeout(() =>{
            document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.group-form-correct').forEach((casillas) => {
            casillas.classList.remove('group-form-correct')

        })

    }else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
    }
});





