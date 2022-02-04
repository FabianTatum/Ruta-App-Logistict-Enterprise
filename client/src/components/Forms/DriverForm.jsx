import React from 'react';
import { useForm } from '../../hooks/useForm';
import './DriverForm.css'

const initialForm = {
    name: "",
    lastName: "",
    identification: "",
    dateOfBirth: "",
    phone: "",
    email: ""
}

const validateForm = (form) => {
    let errors = {}
     
    let regexWords = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexNumber = /^[0-9].{1,10}$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexDate = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/

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

    if(!form.dateOfBirth.trim()){
        errors.dateOfBirth = `El campo 'Fecha de Nacimiento' es requerido`
        console.log(errors.dateOfBirth)
    }else if(!regexDate.test(form.dateOfBirth.trim())){
        errors.dateOfBirth = `El campo 'Fecha' es incorrecto`
        console.log(errors.dateOfBirth)
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

    return errors;
}

const DriverForm = () => {
    const {
        form,
        response,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validateForm)


    return ( 
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2>Formulario Conductor</h2>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Apellidos"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.lastName}
                    required
                />
                <input 
                    type="text" 
                    name="identification" 
                    placeholder="Cédula de Ciudadania"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.identification}
                    required
                />
                <input 
                    type="date" 
                    name="dateOfBirth" 
                    placeholder="Fecha de Nacimiento"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.dateOfBirth}
                    required
                />
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Telefono (+57)"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.phone}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                />
                <input type="submit" value="Enviar" />
            </form> 
        </div>
     );
}
 
export default DriverForm;