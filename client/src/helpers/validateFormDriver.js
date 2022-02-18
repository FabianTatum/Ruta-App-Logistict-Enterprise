const validateFormDriver = (form) => {
    let errors = {}
     
    let regexWords = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexNumber = /^[0-9].{1,10}$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!form.name.trim()){
        errors.name = `El campo 'Nombre' es requerido`
        console.log(errors.name)
    }else if(!regexWords.test(form.name.trim())){
        errors.name = `El campo 'Nombre' solo acepta letras y espacios`
        console.log(errors.name)
    }

    if(!form.lastName.trim()){
        errors.lastName = `El campo 'Apellidos' es requerido`
        console.log(errors.lastName)
    }else if(!regexWords.test(form.lastName.trim())){
        errors.name = `El campo 'Apellidos' solo acepta letras y espacios`
        console.log(errors.lastName)
    }

    if(!form.identification.trim()){
        errors.identification = `El campo 'Identificación' es requerido`
        console.log(errors.identification)
    }else if(!regexNumber.test(form.identification.trim())){
        errors.identification = `El campo 'Indentificacion' es incorrecto`
        console.log(errors.identification)
    }

    if(!form.phone.trim()){
        errors.phone = `El campo 'Teléfono' es requerido`
        console.log(errors.phone)
    }else if(!regexNumber.test(form.phone.trim())){
        errors.phone = `El campo 'Teléfono' solo acepta numeros`
        console.log(errors.phone)
    }

    if(!form.email.trim()){
        errors.email = `El campo 'Email' es requerido`
        console.log(errors.email)
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = `El campo 'Email' es incorrecto`
        console.log(errors.email)
    }

    if(!form.password.trim()){
        errors.password = `El campo 'Contraseña' es requerido`
    }else if(!regexNumber.test(form.password.trim())){
        errors.password = `El campo 'Contraseña' es incorrecto`
    }

    return errors;
}
 
export default validateFormDriver;